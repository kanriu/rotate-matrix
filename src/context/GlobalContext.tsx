import { createContext } from "react";

interface ContextProps {
  input: number[][];
  isShowButtonRotate: boolean;
  saveInput: (range: number) => void;
  handleRotate: () => void;
}

export const GlobalContext = createContext({} as ContextProps);
