"use client";
import ActionButton from "@/components/workout/ActionButton";
import CalculateSate from "@/components/workout/CalculateSate";

import PlanSelectedCard from "@/components/workout/plan/PlanSelectedCard";
import SaveSelectedCard from "@/components/workout/save/SaveSelectedCard";

import { context } from "@/context/contextProvider";
import { useContext } from "react";

const MyPlanPage = () => {
  const { activeTab } = useContext(context);
  return (
    <div className="container mx-auto mt-25 px-4 sm:px-6 lg:px-0">
      {/* ================= HEADER ================= */}
      <div className="mb-8">
        <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
          MY <span className="text-[#C2F800]">PLAN</span>
        </h2>

        <p className="mt-2 text-sm text-[#9CA3AF] sm:text-base">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      {/* ================= CALCULATE STATS ================= */}
      <CalculateSate />
      {/* ================= TABS + SORT ================= */}
      <div className="mb-6 flex flex-col gap-4 rounded-2xl border border-white/10 bg-[#111111] p-3 sm:flex-row sm:items-center sm:justify-between">
        {/* Tabs */}

        <ActionButton />

        {/* Sorting */}
        <div className="w-full sm:w-auto">
          <select
            name="sort"
            id="sort"
            className="w-full cursor-pointer rounded-xl border border-white/10 bg-[#11111c] px-4 py-2.5 text-sm text-white outline-none transition focus:border-[#C2F800] sm:w-48"
          >
            <option value="duration">Duration</option>
            <option value="calories">Calories</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>

      {/* ================= EMPTY / WORKOUT CONTENT CARD ================= */}
      <div className="min-h-75 rounded-3xl border border-dashed border-white/15 bg-[#0d0d0d] mb-5 ">
        {activeTab === "plan" ? <PlanSelectedCard /> : <SaveSelectedCard />}
      </div>
    </div>
  );
};

export default MyPlanPage;
