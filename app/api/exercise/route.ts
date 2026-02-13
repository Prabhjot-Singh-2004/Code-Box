import { db } from "@/config/db";
import {
  CompletedExerciseTable,
  CourseChaptersTable,
  CourseTable,
  ExerciseTable,
} from "@/config/schema";
import { and, eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { courseId, chapterId, exerciseId } = await req.json();

  const courseInfo = await db
    .select()
    .from(CourseTable)
    .where(eq(CourseTable.CourseId, courseId));

  const courseResult = await db
    .select()
    .from(CourseChaptersTable)
    .where(
      and(
        eq(CourseChaptersTable.courseId, courseId),
        eq(CourseChaptersTable.chapterId, chapterId),
      ),
    );

  const exerciseResult = await db
    .select()
    .from(ExerciseTable)
    .where(
      and(
        eq(ExerciseTable.courseId, courseId),
        eq(ExerciseTable.exerciseId, exerciseId),
      ),
    );

  //Get Completed Exercise in that Course/Chapters
  const completedExercise = await db
    .select()
    .from(CompletedExerciseTable)
    .where(
      and(
        eq(CompletedExerciseTable.courseId, courseId),
        eq(CompletedExerciseTable.chapterId, chapterId),
      ),
    );

  return NextResponse.json({
    ...courseResult[0],
    exerciseData: exerciseResult[0],
    completedExercise: completedExercise,
    editorType: courseInfo[0]?.editorType,
  });
}
