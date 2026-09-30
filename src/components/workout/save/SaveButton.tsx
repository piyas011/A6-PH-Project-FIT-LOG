"use client";

import { context } from "@/context/contextProvider";
import { IData } from "@/types/workoutDataType";
import { useContext } from "react";
import { toast } from "react-toastify";

const SaveButton = ({ workoutData }: { workoutData: IData }) => {
  const buttonClass = `cursor-pointer rounded-[10px] border border-[#C2F800] px-5 py-2
      transition-all duration-200
      hover:bg-[#C2F800]/10
      hover:-translate-y-0.5
      active:translate-y-0`;

  const {
    save,
    setSave,
    saveCount,
    setSaveCount,
    saveExercises,
    setSaveCalories,
    saveMinutes,
    setSaveMinutes,
    saveCalories,
    setSaveExercises,
  } = useContext(context);
  const isAlreadyAdded = save.some((item) => item.id === workoutData.id);
  const handelAddToWorkoutData = (workoutData: IData) => {
    if (isAlreadyAdded) {
      toast.error("Already in your save");
      return;
    }

    setSave([...save, workoutData]);
    setSaveCount(saveCount + 1);
    toast.success("Save for later");

    setSaveExercises(saveExercises + 1);
    setSaveMinutes(saveMinutes + workoutData.duration);
    setSaveCalories(saveCalories + workoutData.caloriesBurned);
  };

  // console.log(saveExercises, saveMinutes, saveCalories);
  return (
    <div>
      <button
        onClick={() => handelAddToWorkoutData(workoutData)}
        className={buttonClass}
      >
        Save for later
      </button>
    </div>
  );
};

export default SaveButton;
