"use client";
import { context } from "@/context/contextProvider";
import { IData } from "@/types/workoutDataType";
import { useContext } from "react";
import { toast, ToastContainer } from "react-toastify";

const buttonClass = `cursor-pointer rounded-[10px] bg-[#C2F800] px-5 py-2 text-black
      transition-all duration-200
      hover:bg-[#d4ff4d]
      hover:-translate-y-0.5
      hover:shadow-[0_4px_15px_rgba(194,248,0,0.15)]
  active:translate-y-0`;

const TodaysPlanButton = ({ workoutData }: { workoutData: IData }) => {
  const {
    plan,
    setPlan,
    planCount,
    setPlanCount,
    exercises,
    setExercises,
    minutes,
    setMinutes,
    calories,
    setCalories,
  } = useContext(context);

  const isAlreadyAdded = plan.some((item) => item.id === workoutData.id);

  const handelAddToWorkoutData = (workoutData: IData) => {
    if (isAlreadyAdded) {
      toast.error("Already in your plan");
      return;
    }

    setPlan([...plan, workoutData]);
    toast.success("Added to today's plan");

    setPlanCount(planCount + 1);
    setExercises(exercises + 1);
    setMinutes(minutes + workoutData.duration);
    setCalories(calories + workoutData.caloriesBurned);
  };

  // console.log(exercises, minutes, calories);
  return (
    <div>
      <button
        onClick={() => handelAddToWorkoutData(workoutData)}
        className={buttonClass}
      >
        Add to today&apos;s plan
      </button>
      <ToastContainer />
    </div>
  );
};

export default TodaysPlanButton;
