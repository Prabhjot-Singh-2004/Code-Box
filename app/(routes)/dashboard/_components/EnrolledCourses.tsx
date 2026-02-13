"use client";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useDebugValue, useEffect, useState } from "react";
import CourseProgressCard from "./CourseProgressCard";

export type EnrolledCourseInfo = {
  bannerImage: string;
  completedExercises: number;
  courseId: number;
  level: string;
  title: string;
  totalExercises: number;
  xpEarned: number;
};

function EnrolledCourses() {
  const [enrolledCourses, setEnrolledCourses] = useState<EnrolledCourseInfo[]>(
    [],
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    GetUserEnrolledCourses();
  }, []);

  const GetUserEnrolledCourses = async () => {
    setLoading(true);
    try {
      const result = await axios.get("/api/course?courseid=enrolled");
      setEnrolledCourses(result.data ?? []);
    } catch (error) {
      console.error("Failed to load enrolled courses:", error);
      setEnrolledCourses([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-3xl mb-2 font-game">Your Enrolled Courses</h2>
      {loading ? (
        <Skeleton className="w-full rounded-2xl my-5" />
      ) : enrolledCourses?.length == 0 ? (
        <div className="flex flex-col items-center gap-3 p-7 border rounded-2xl bg-zinc-900">
          <Image src={"/books.png"} alt="books" height={90} width={90} />
          <h2 className="font-game text-2xl">
            You Don't have any enrolled courses
          </h2>
          <Link href={"/courses"}>
            <Button variant={"pixel"} size={"lg"} className="font-game text-lg">
              Browse All Courses
            </Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-5">
          {enrolledCourses?.map((course, index) => (
            <div key={index}>
              <CourseProgressCard course={course} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default EnrolledCourses;
