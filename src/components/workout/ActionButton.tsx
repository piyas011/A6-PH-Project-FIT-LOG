"use client";

import { useState } from "react";

const ActionButton = () => {
  const [activeTab, setActiveTab] = useState<"plan" | "save">("plan");

  const handelButtonClick = (active: "plan" | "save") => {
    setActiveTab(active);
  };

  return (
    <div className="flex w-full rounded-xl bg-black p-1 sm:w-auto">
      <button
        onClick={() => handelButtonClick("plan")}
        className={`flex-1 rounded-lg px-5 py-2.5 text-sm  cursor-pointer ${activeTab === "plan" ? "bg-[#C2F800] text-black transition hover:bg-[#d4ff4d] font-bold " : " text-[#9CA3AF] transition hover:bg-white/5 hover:text-white font-medium"} sm:flex-none `}
      >
        Today&apos;s Plan
      </button>

      <button
        onClick={() => handelButtonClick("save")}
        className={`flex-1 rounded-lg px-5 py-2.5 text-sm cursor-pointer  ${activeTab === "save" ? "bg-[#C2F800] text-black transition hover:bg-[#d4ff4d] font-bold " : " text-[#9CA3AF] transition hover:bg-white/5 hover:text-white font-medium"} sm:flex-none `}
      >
        Saved
      </button>
    </div>
  );
};

export default ActionButton;
