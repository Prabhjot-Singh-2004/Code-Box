import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Course } from "../../_components/CourseList";

type Props = {
  courseDetail: Course | undefined;
};

function CourseStatus({ courseDetail }: Props) {
  
    const[counts, setCounts]=useState<{
        totalExce:number,
        totalXp: number
    }>()

    useEffect(()=>{
        courseDetail && GetCounts()
    },[courseDetail])
  
    const GetCounts = () => {
    let totalExcercises = 0;
    let totalXp=0;
    courseDetail?.chapters?.forEach((chapter) => {
      totalExcercises = totalExcercises + chapter?.exercises?.length;
      chapter?.exercises?.forEach(exc=>{
        totalXp=totalXp+exc?.xp
      })
    })

    setCounts({
        totalExce:totalExcercises,
        totalXp:totalXp
      })

  };

  const UpdateProgress = (currentValue: number, totalValue: number): number => {
    if (totalValue <= 0) return 0;
    return (currentValue * 100) / totalValue;
  };

  return (
    <div className="font-game p-4 border-4 rounded-2xl w-full">
      <h2 className="text-3xl">Course Progress</h2>
      <div className="flex items-center gap-5 mt-4">
        <Image src={"/book.png"} alt="book" width={50} height={50} />
        <div className="w-full">
          <h2 className="flex justify-between text-2xl ">
            Excercises <span className="text-gray-400">{courseDetail?.completedExercises?.length}/{counts?.totalExce}</span>
          </h2>
          {/* @ts-ignore */}
          <Progress value={UpdateProgress(courseDetail?.completedExercises?.length, counts?.totalExce)} className="mt-2" />
        </div>
      </div>

      <div className="flex items-center gap-5 mt-4">
        <Image src={"/star.png"} alt="book" width={50} height={50} />
        <div className="w-full">
          <h2 className="flex justify-between text-2xl ">
            XP Earned <span className="text-gray-400">{courseDetail?.courseEnrolledInfo?.xpEarned}/{counts?.totalXp}</span>
          </h2>
          {/* @ts-ignore */}
          <Progress value={UpdateProgress(courseDetail?.courseEnrolledInfo?.xpEarned??0,counts?.totalXp)} className="mt-2" />
        </div>
      </div>
    </div>
  );
}

export default CourseStatus;
