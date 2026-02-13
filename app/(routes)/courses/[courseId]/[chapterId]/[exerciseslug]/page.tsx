"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Allotment } from "allotment";
import "allotment/dist/style.css";
import { completedExercises, exercise } from "../../../_components/CourseList";
import ContentSection from "./_components/ContentSection";
import CodeEditor from "./_components/CodeEditor";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export type CourseExercise = {
  chapterId: number;
  courseId: number;
  desc: string;
  name: string;
  editorType?: string;
  exercises: exercise[];
  exerciseData: ExerciseData;
  completedExercise: completedExercises[];
};

type ExerciseData = {
  chapterId: number;
  courseId: number;
  exerciseId: string;
  exerciseName: string;
  exercisesContent: ExerciseContent;
};

type ExerciseContent = {
  content: string;
  hint: string;
  hintXp: string;
  starterCode: any;
  task: string;
};

function Playground() {
  const { courseId, chapterId, exerciseslug } = useParams();
  const [loading, setLoading] = useState(false);

  const [courseExerciseData, setCourseExerciseData] =
    useState<CourseExercise>();

  const [exerciseInfo, setExerciseInfo] = useState<exercise>();
  const [nextButtonRoute, setNextButtonRoute] = useState<string>();
  const [PrevButtonRoute, setPrevButtonRoute] = useState<string>();

  useEffect(() => {
    GetExerciseCourseDetail();
  }, []);

  const GetExerciseCourseDetail = async () => {
    setLoading(true);
    const result = await axios.post("/api/exercise", {
      courseId: courseId,
      chapterId: chapterId,
      exerciseId: exerciseslug,
    });

    console.log(result.data);
    setCourseExerciseData(result.data);
    setLoading(false);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (courseExerciseData) {
      GetExerciseDetail();
      GetPrevNextButtonRoute();
    }
  }, [courseExerciseData, exerciseslug]);

  const GetExerciseDetail = () => {
    const exerciseInfo = courseExerciseData?.exercises?.find(
      (item) => item.slug == exerciseslug,
    );
    setExerciseInfo(exerciseInfo);
  };

  const GetPrevNextButtonRoute = () => {
    //Current index of Exercise
    const currentExerciseIndex =
      courseExerciseData?.exercises?.findIndex(
        (item) => item.slug == exerciseslug,
      ) ?? 0;
    const NextExercise =
      courseExerciseData?.exercises[currentExerciseIndex + 1]?.slug;
    const PrevExercise =
      courseExerciseData?.exercises[currentExerciseIndex - 1]?.slug;

    setNextButtonRoute(
      NextExercise
        ? "/courses/" + courseId + "/" + chapterId + "/" + NextExercise
        : undefined,
    );
    setPrevButtonRoute(
      PrevExercise
        ? "/courses/" + courseId + "/" + chapterId + "/" + PrevExercise
        : undefined,
    );
  };

  return (
    <div className="border-t-4 h-[calc(100vh-64px)]">
      <Allotment defaultSizes={[35, 65]}>
        <Allotment.Pane minSize={400}>
          <div className="h-full overflow-auto">
            <ContentSection
              courseExerciseData={courseExerciseData}
              loading={loading}
            />
          </div>
        </Allotment.Pane>
        <Allotment.Pane minSize={400}>
          <div className="h-full overflow-auto p-4">
            <CodeEditor
              courseExerciseData={courseExerciseData}
              loading={loading}
            />
          </div>
        </Allotment.Pane>
      </Allotment>
      <div className="font-game fixed bottom-0 w-full bg-zinc-900 flex p-4 justify-between items-center">
        <Link href={PrevButtonRoute ?? "/courses/" + courseId}>
          <Button className="text-xl" variant={"pixel"}>
            Previous
          </Button>
        </Link>
        <div className="flex gap-3 items-center">
          <Image src={"/star.png"} alt="star" width={40} height={40} />
          {exerciseInfo?.xp && (
            <h2 className="text-2xl">
              You can Earn <span className="text-4xl">{exerciseInfo.xp}</span>{" "}
              XP
            </h2>
          )}
        </div>
        <Link href={nextButtonRoute ?? "/courses/" + courseId}>
          <Button className="text-xl" variant={"pixel"}>
            Next
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Playground;
