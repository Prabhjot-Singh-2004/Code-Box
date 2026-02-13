import { db } from "@/config/db";
import { EnrolledCourseTable } from "@/config/schema";
import { currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { courseId } = await req.json();
  const user = await currentUser();

  const result = await db.insert(EnrolledCourseTable).values({
    courseId: courseId,
    userId: user?.primaryEmailAddress?.emailAddress,
    xpEarned: 0,
  }).returning()

  return NextResponse.json(result);
}
