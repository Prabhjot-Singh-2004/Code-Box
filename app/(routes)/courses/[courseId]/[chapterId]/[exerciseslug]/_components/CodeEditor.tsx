import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
  useSandpack,
} from "@codesandbox/sandpack-react";
import { Allotment } from "allotment";
import { CourseExercise } from "../page";
import { Button } from "@/components/ui/button";
import { nightOwl, gruvboxDark } from "@codesandbox/sandpack-themes";
import { useParams } from "next/navigation";
import axios from "axios";
import { toast } from "sonner";

type Props = {
  courseExerciseData: CourseExercise | undefined;
  loading: boolean;
};

const CodeEditorChildren = ({ onCompleteExercise, IsCompleted }: any) => {
  const { sandpack } = useSandpack();

  return (
    <div className="font-game absolute bottom-42 flex gap-5 right-5">
      <Button
        variant={"pixel"}
        size={"lg"}
        className="text-xl"
        onClick={() => sandpack.runSandpack()}
      >
        Run Code
      </Button>
      <Button
        variant={"pixel"}
        className="bg-[#a3e534] text-xl"
        size={"lg"}
        onClick={() => onCompleteExercise()}
        disabled={IsCompleted}
      >
        {IsCompleted ? "Already Completed !" : "Mark Completed !"}
      </Button>
    </div>
  );
};

function CodeEditor({ courseExerciseData, loading }: Props) {
  const { exerciseslug } = useParams();
  const exerciseIndex =
    courseExerciseData?.exercises?.findIndex(
      (item) => item.slug == exerciseslug,
    ) ?? -1;
  const hasExercise = exerciseIndex >= 0;

  const IsCompleted = hasExercise
    ? courseExerciseData?.completedExercise?.find(
        (item) => item?.exerciseId == exerciseIndex + 1,
      )
    : false;

  const onCompleteExercise = async () => {
    if (!courseExerciseData || !hasExercise) {
      return;
    }
    const result = await axios.post("/api/exercise/complete", {
      courseId: courseExerciseData?.courseId,
      chapterId: courseExerciseData?.chapterId,
      exerciseId: exerciseIndex + 1,
      xpEarned: courseExerciseData?.exercises[exerciseIndex].xp,
    });
    toast.success("Exercise Completed!");
  };

  return (
    <div className="h-full">
      <SandpackProvider
        //@ts-ignore
        template={courseExerciseData?.editorType ?? "react"}
        theme={gruvboxDark}
        style={{
          height: "100vh",
        }}
        files={courseExerciseData?.exerciseData?.exercisesContent?.starterCode}
        options={{
          autorun: false,
          autoReload: false,
        }}
      >
        <SandpackLayout
          style={{
            height: "100%",
          }}
        >
          <Allotment defaultSizes={[50, 50]}>
            <Allotment.Pane minSize={400}>
              <div className="relative h-full">
                <SandpackCodeEditor
                  showTabs
                  style={{
                    height: "100%",
                  }}
                />
                <CodeEditorChildren
                  onCompleteExercise={onCompleteExercise}
                  IsCompleted={IsCompleted}
                />
              </div>
            </Allotment.Pane>
            <Allotment.Pane minSize={400}>
              <SandpackPreview
                showNavigator
                showOpenInCodeSandbox={false}
                showOpenNewtab
                style={{
                  height: "100%",
                }}
              />
            </Allotment.Pane>
          </Allotment>
        </SandpackLayout>
      </SandpackProvider>
    </div>
  );
}

export default CodeEditor;
