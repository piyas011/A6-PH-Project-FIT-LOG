"use client";
import { context } from "@/context/contextProvider";
import { IData } from "@/types/workoutDataType";
import { useContext } from "react";
import { FaCheck } from "react-icons/fa6";
import { toast } from "react-toastify";

const MarkAsDoneButton = ({ item }: { item: IData }) => {
  const { setPlan } = useContext(context);

  const handleRemoveItem = () => {
    setPlan((res) => res.filter((planItem) => planItem.id !== item.id));
    toast.success("Workout logged");
  };

  return (
    <button
      onClick={handleRemoveItem}
      className=" flex w-full items-center justify-center gap-2 rounded-lg bg-[#C2F800] px-4 py-2.5 text-sm font-bold text-black transition-all duration-300 hover:bg-[#d4ff33] hover:scale-[1.02] sm:w-auto "
    >
      <FaCheck /> Mark as Done
    </button>
  );
};

export default MarkAsDoneButton;
