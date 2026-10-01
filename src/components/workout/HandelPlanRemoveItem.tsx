"use client";
import { context } from "@/context/contextProvider";
import { IData } from "@/types/workoutDataType";
import { useContext } from "react";
import { IoMdClose } from "react-icons/io";
import { toast } from "react-toastify";

const HandelRemoveItem = ({ item }: { item: IData }) => {
  const {
    setPlanCount,
    planCount,
    setPlan,
    exercises,
    setExercises,
    minutes,
    setMinutes,
    calories,
    setCalories,
  } = useContext(context);

  const handelRemoveItem = () => {
    console.log("Clicked");
    setPlan((res) => res.filter((planItem) => planItem.id !== item.id));
    setPlanCount(planCount - 1);
    setExercises(exercises - 1);
    setMinutes(minutes - item.duration);
    setCalories(calories - item.caloriesBurned);
    toast.success("Remove from today's Plan");
  };

  return (
    <button
      onClick={handelRemoveItem}
      className=" flex h-10 w-full items-center justify-center rounded-lg border border-red-500/20 text-gray-400 transition-all duration-300 hover:border-red-500/50 hover:bg-red-500/10 hover:text-red-400 sm:w-10 "
    >
      <IoMdClose />
    </button>
  );
};

export default HandelRemoveItem;
