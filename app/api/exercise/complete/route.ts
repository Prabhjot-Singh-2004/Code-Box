import { db } from "@/config/db";
import {
  CompletedExerciseTable,
  EnrolledCourseTable,
  usersTable,
} from "@/config/schema";
import { currentUser } from "@clerk/nextjs/server";
import { eq, sql } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { courseId, chapterId, exerciseId, xpEarned } = await req.json();
  const user = await currentUser();

  const result = await db
    .insert(CompletedExerciseTable)
    .values({
      chapterId: chapterId,
      courseId: courseId,
      exerciseId: exerciseId,
      userId: user?.primaryEmailAddress?.emailAddress,
    })
    .returning();

  //update Course XP Earned
  await db
    .update(EnrolledCourseTable)
    .set({
      xpEarned: sql`${EnrolledCourseTable.xpEarned}+${xpEarned}`,
    })
    .where(eq(EnrolledCourseTable?.courseId, courseId));

  //Update user XP Earn Points
  const email = user?.primaryEmailAddress?.emailAddress;
  if (email) {
    await db
      .update(usersTable)
      .set({
        points: sql`${usersTable.points}+${xpEarned}`,
      })
      .where(eq(usersTable.email, email));
  }

  return NextResponse.json(result);
}
