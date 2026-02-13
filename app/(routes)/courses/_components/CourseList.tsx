"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { ChartNoAxesColumnIncreasingIcon } from "lucide-react";
import Link from "next/link";

export type Course = {
  id: number;
  CourseId: number;
  title: string;
  desc: string;
  level: string;
  bannerImage: string;
  tags: string;
  chapters?: Chapter[];
  userEnrolled?: boolean;
  courseEnrolledInfo?: courseEnrolledInfo;
  completedExercises?: completedExercises[];
};

export type completedExercises = {
  chapterId: number;
  courseId: number;
  exerciseId: number;
};

export type courseEnrolledInfo = {
  xpEarned: number;
  enrolledDate: any;
};

export type Chapter = {
  chapterId: number;
  courseId: number;
  desc: string;
  name: string;
  id: number;
  exercises: exercise[];
};

export type exercise = {
  name: string;
  slug: string;
  xp: number;
  difficulty: string;
};

type Props = {
  smallerCard?: boolean;
  maxLimit?: number;
};

function CourseList({ smallerCard = false, maxLimit = 100 }: Props) {
  const [courseList, setCourseList] = useState<Course[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    GetAllCourses();
  }, []);

  const GetAllCourses = async () => {
    try {
      setLoading(true);
      const result = await axios.get("/api/course");
      setCourseList(result?.data);
    } catch (error) {
      console.error("Failed to fetch courses:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 mt-3">
      {courseList?.map(
        (course, index) =>
          maxLimit &&
          maxLimit > index && (
            <Link href={"/courses/" + course?.CourseId} key={index}>
              <div className="border-4 rounded-xl hover:bg-zinc-900 cursor-pointer">
                <Image
                  src={course.bannerImage?.trimEnd() ?? ""}
                  alt={course.title ?? ""}
                  width={400}
                  height={400}
                  className={`w-full ${smallerCard ? "h-[120px]" : "h-[200px]"}  object-cover rounded-t-lg`}
                />
                <div className="p-4">
                  <h2 className="font-game text-2xl">{course?.title}</h2>
                  <p className="font-game text-xl text-gray-400 line-clamp-2">
                    {course?.desc}
                  </p>
                  <h2 className="bg-zinc-800 flex gap-2 font-game p-2 px-4 mt-3 rounded-2xl items-center inline-flex">
                    <ChartNoAxesColumnIncreasingIcon className="h-4 w-4" />
                    {course.level}
                  </h2>
                </div>
              </div>
            </Link>
          ),
      )}
    </div>
  );
}

export default CourseList;
