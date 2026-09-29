"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface ContextType {
  planCount: number;
  setPlanCount: Dispatch<SetStateAction<number>>;
  saveCount: number;
  setSaveCount: Dispatch<SetStateAction<number>>;
}

export const context = createContext({} as ContextType);
export const Provider = ({ children }: { children: ReactNode }) => {
  const [plan, setPlan] = useState([]);
  const [save, setSave] = useState([]);
  const [planCount, setPlanCount] = useState(0);
  const [saveCount, setSaveCount] = useState(0);
  const [exercises, setExercises] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [calories, setCalories] = useState(0);
  // /////////////////////
  const [saveExercises, setSaveExercises] = useState(0);
  const [saveMinutes, setSaveMinutes] = useState(0);
  const [saveCalories, setSaveCalories] = useState(0);
  // /////////////////////
  const [activeTab, setActiveTab] = useState<"tody" | "save">("tody");

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
