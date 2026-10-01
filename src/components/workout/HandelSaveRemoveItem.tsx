import { context } from "@/context/contextProvider";
import { IData } from "@/types/workoutDataType";
import React, { useContext } from "react";
import { IoMdClose } from "react-icons/io";
import { toast } from "react-toastify";

const HandelSaveRemoveItem = ({ item }: { item: IData }) => {
  const {
    setSave,
    setSaveCount,
    saveCount,
    saveExercises,
    setSaveExercises,
    saveMinutes,
    setSaveMinutes,
    setSaveCalories,
    saveCalories,
  } = useContext(context);

  const handelRemoveItem = () => {
    console.log("Clicked");
    setSave((res) => res.filter((planItem) => planItem.id !== item.id));
    setSaveCount(saveCount - 1);
    setSaveExercises(saveExercises - 1);
    setSaveMinutes(saveMinutes - item.duration);
    setSaveCalories(saveCalories - item.caloriesBurned);
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

export default HandelSaveRemoveItem;
