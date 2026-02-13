import { db } from "@/config/db";
import {
  CompletedExerciseTable,
  CourseChaptersTable,
  CourseTable,
  EnrolledCourseTable,
} from "@/config/schema";
import { currentUser } from "@clerk/nextjs/server";
import { asc, eq, and, desc, inArray } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const courseIdParam = searchParams.get("courseid");
  const user = await currentUser();

  const userEmail = user?.primaryEmailAddress?.emailAddress;

  if (!userEmail) {
    return NextResponse.json({ error: "User not authenticated" });
  }

  if (courseIdParam && courseIdParam !== "enrolled") {
    const courseId = Number(courseIdParam);

    const result = await db
      .select()
      .from(CourseTable)
      .where(eq(CourseTable.CourseId, courseId));
    const chapterResult = await db
      .select()
      .from(CourseChaptersTable)
      .where(eq(CourseChaptersTable.courseId, courseId));

    const enrolledCourse = await db
      .select()
      .from(EnrolledCourseTable)
      .where(
        and(
          eq(EnrolledCourseTable.courseId, courseId),
          eq(EnrolledCourseTable.userId, userEmail),
        ),
      );

    const isEnrolledCourse = enrolledCourse?.length > 0 ? true : false;

    const completedExercises = await db
      .select()
      .from(CompletedExerciseTable)
      .where(
        and(
          eq(CompletedExerciseTable.courseId, courseId),
          eq(CompletedExerciseTable.userId, userEmail),
        ),
      )
      .orderBy(
        desc(CompletedExerciseTable?.courseId),
        desc(CompletedExerciseTable?.exerciseId),
      );

    return NextResponse.json({
      ...result[0],
      chapters: chapterResult,
      userEnrolled: isEnrolledCourse,
      courseEnrolledInfo: enrolledCourse[0],
      completedExercises: completedExercises,
    });
  } else if (courseIdParam == "enrolled") {
    //Get User Enrolled Courses Only
    // 1. Fetch all enrolled courses for the user
    const enrolledCourses = await db
      .select()
      .from(EnrolledCourseTable)
      .where(eq(EnrolledCourseTable.userId, userEmail));

    if (enrolledCourses.length === 0) {
      return NextResponse.json([]);
    }

    // Extract courseIds
    const courseIds = enrolledCourses
      .map((c) => c.courseId)
      .filter((id): id is number => id !== null);

    if (courseIds.length === 0) {
      return NextResponse.json([]);
    }

    // 2. Fetch all course details in one go
    const courses = await db
      .select()
      .from(CourseTable)
      .where(inArray(CourseTable.CourseId, courseIds));

    // 3. Fetch chapters for all courses
    const chapters = await db
      .select()
      .from(CourseChaptersTable)
      .where(inArray(CourseChaptersTable.courseId, courseIds))
      .orderBy(asc(CourseChaptersTable.chapterId));

    // 4. Fetch completed exercises for all courses
    const completed = await db
      .select()
      .from(CompletedExerciseTable)
      .where(
        and(
          inArray(CompletedExerciseTable.courseId, courseIds),
          eq(CompletedExerciseTable.userId, userEmail),
        ),
      )
      .orderBy(
        desc(CompletedExerciseTable.courseId),
        desc(CompletedExerciseTable.exerciseId),
      );

    const finalResult = courses.map((course) => {
      const courseEnrollInfo = enrolledCourses.find(
        (e) => e.courseId === course.CourseId,
      );

      return {
        ...course,
        chapters: chapters.filter((ch) => ch.courseId === course.CourseId),
        completedExercises: completed.filter(
          (cx) => cx.courseId === course.CourseId,
        ),
        courseEnrolledInfo: courseEnrollInfo,
        userEnrolled: true,
      };
    });

    // Format output
    const formattedResult = finalResult.map((item) => {
      // Count total exercises by summing exercises arrays in all chapters
      const totalExercises = item.chapters.reduce((acc, chapter) => {
        const exercisesCount = Array.isArray(chapter.exercises)
          ? chapter.exercises.length
          : 0;
        return acc + exercisesCount;
      }, 0);

      const completedExercises = item.completedExercises.length;

      return {
        courseId: item.CourseId,
        title: item.title,
        bannerImage: item?.bannerImage,
        totalExercises,
        completedExercises,
        xpEarned: item.courseEnrolledInfo?.xpEarned || 0,
        level: item.level,
      };
    });

    return NextResponse.json(formattedResult);
  } else {
    //Fetch All Courses
    const result = await db
      .select()
      .from(CourseTable)
      .orderBy(asc(CourseTable.id));

    return NextResponse.json(result);
  }
}
