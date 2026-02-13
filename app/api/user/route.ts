import { db } from "@/config/db";
import { usersTable } from "@/config/schema";
import { currentUser } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm/sql/expressions/conditions";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const user = await currentUser();

  if (!user || !user.primaryEmailAddress?.emailAddress) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  //If user already exists?
  const users = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.email, user.primaryEmailAddress.emailAddress));

  //If not create new user in DB
  if (users?.length <= 0) {
    const newUser = {
      name: user?.fullName ?? "",
      email: user?.primaryEmailAddress?.emailAddress ?? "",
      points: 0,
    };
    const result = await db.insert(usersTable).values(newUser).returning();

    return NextResponse.json(result[0]);
  }

  //Return user info
  return NextResponse.json(users[0]);
}
