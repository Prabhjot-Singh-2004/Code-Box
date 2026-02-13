import React from "react";
import { CourseExercise } from "../page";
import { Skeleton } from "@/components/ui/skeleton";
import { Lightbulb, Goal, Book } from "lucide-react";

type Props = {
  courseExerciseData: CourseExercise | undefined;
  loading: boolean;
};

function ContentSection({ courseExerciseData, loading }: Props) {

    const ContentInfo=courseExerciseData?.exerciseData;

  return (
    <div className="p-10 mb-20">
      {loading || !ContentInfo ? (
        <Skeleton className="h-full w-full m-10 rounded-2xl" />
      ) : (
        <div>
            <h2 className="font-game text-3xl my-3 flex gap-2 items-center"><Book className=" text-green-400"/>{courseExerciseData?.exerciseData?.exerciseName}</h2>
          <div
            dangerouslySetInnerHTML={{
              __html:
                ContentInfo?.exercisesContent.content|| "",
            }}
          />
          <div>
            <h2 className="font-game text-3xl mt-4  flex gap-2 items-center text-blue-400"> <Goal />Task</h2>
            <div className="p-4 border rounded-2xl bg-zinc-800" dangerouslySetInnerHTML={{__html : ContentInfo?.exercisesContent?.task}}/>
          </div>
          <div>
            <h2 className="font-game text-3xl mt-4 flex gap-2 items-center text-yellow-400"><Lightbulb/>Hint</h2>
            <div className="p-4 border rounded-2xl bg-zinc-800" dangerouslySetInnerHTML={{__html : ContentInfo?.exercisesContent?.hint}}/>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContentSection;
