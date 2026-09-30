"use client";

import { IData } from "@/types/workoutDataType";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface ContextType {
  plan: IData[];
  setPlan: Dispatch<SetStateAction<IData[]>>;

  save: IData[];
  setSave: Dispatch<SetStateAction<IData[]>>;

  planCount: number;
  setPlanCount: Dispatch<SetStateAction<number>>;

  saveCount: number;
  setSaveCount: Dispatch<SetStateAction<number>>;

  exercises: number;
  setExercises: Dispatch<SetStateAction<number>>;

  minutes: number;
  setMinutes: Dispatch<SetStateAction<number>>;

  calories: number;
  setCalories: Dispatch<SetStateAction<number>>;

  saveExercises: number;
  setSaveExercises: Dispatch<SetStateAction<number>>;

  saveMinutes: number;
  setSaveMinutes: Dispatch<SetStateAction<number>>;

  saveCalories: number;
  setSaveCalories: Dispatch<SetStateAction<number>>;

  activeTab: "plan" | "save";
  setActiveTab: Dispatch<SetStateAction<"plan" | "save">>;
}

export const context = createContext({} as ContextType);
export const Provider = ({ children }: { children: ReactNode }) => {
  const [plan, setPlan] = useState<IData[]>([]);
  const [save, setSave] = useState<IData[]>([]);
  const [planCount, setPlanCount] = useState(0);
  const [saveCount, setSaveCount] = useState(0);
  const [exercises, setExercises] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [calories, setCalories] = useState(0);
  const [saveExercises, setSaveExercises] = useState(0);
  const [saveMinutes, setSaveMinutes] = useState(0);
  const [saveCalories, setSaveCalories] = useState(0);
  const [activeTab, setActiveTab] = useState<"plan" | "save">("plan");

  const dataShared = {
    plan,
    setPlan,
    save,
    setSave,
    planCount,
    setPlanCount,
    saveCount,
    setSaveCount,
    exercises,
    setExercises,
    minutes,
    setMinutes,
    calories,
    setCalories,
    saveExercises,
    setSaveExercises,
    saveMinutes,
    setSaveMinutes,
    saveCalories,
    setSaveCalories,
    activeTab,
    setActiveTab,
  };
  return <context.Provider value={dataShared}>{children}</context.Provider>;
};
