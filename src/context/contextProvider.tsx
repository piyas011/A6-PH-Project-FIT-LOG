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
  const [planCount, setPlanCount] = useState(0);
  const [saveCount, setSaveCount] = useState(0);

  const dataShared = { planCount, setPlanCount, saveCount, setSaveCount };
  return <context.Provider value={dataShared}>{children}</context.Provider>;
};
