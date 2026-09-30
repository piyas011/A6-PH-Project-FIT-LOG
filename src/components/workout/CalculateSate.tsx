"use client";
import { context } from "@/context/contextProvider";
import { useContext } from "react";

const CalculateSate = () => {
  const {
    exercises,
    saveExercises,
    minutes,
    saveMinutes,
    calories,
    saveCalories,
    activeTab,
  } = useContext(context);
  return (
    <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
      {/* Exercises */}
      <div className="rounded-2xl border border-white/10 bg-[#111111] p-5 transition hover:border-[#C2F800]/40">
        <p className="text-sm font-medium uppercase tracking-wider text-[#9CA3AF]">
          Exercises
        </p>

        <p className="mt-2 text-3xl font-bold text-[#C2F800]">
          {`${activeTab === "plan" ? exercises : saveExercises}`}
        </p>
      </div>

      {/* Minutes */}
      <div className="rounded-2xl border border-white/10 bg-[#111111] p-5 transition hover:border-[#C2F800]/40">
        <p className="text-sm font-medium uppercase tracking-wider text-[#9CA3AF]">
          Minutes
        </p>

        <p className="mt-2 text-3xl font-bold text-white">
          {`${activeTab === "plan" ? minutes : saveMinutes}`}
        </p>
      </div>

      {/* Calories */}
      <div className="rounded-2xl border border-white/10 bg-[#111111] p-5 transition hover:border-[#C2F800]/40">
        <p className="text-sm font-medium uppercase tracking-wider text-[#9CA3AF]">
          Calories
        </p>

        <p className="mt-2 text-3xl font-bold text-white">
          {`${activeTab === "plan" ? calories : saveCalories}`}
        </p>
      </div>
    </div>
  );
};

export default CalculateSate;
