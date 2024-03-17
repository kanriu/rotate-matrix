import { useReducer } from "react";
import { GlobalContext, globalReducer } from ".";

export interface GlobalState {
  input: number[][];
  isShowButtonRotate: boolean;
}

const GLOBAL_INITIAL_STATE: GlobalState = {
  input: [],
  isShowButtonRotate: true,
};

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(globalReducer, GLOBAL_INITIAL_STATE);

  const saveInput = (range: number) => {
    let input: number[][] = [];
    let arr: number[] = [];

    for (let i = 0; i < range; i++) {
      for (let j = 0; j < range; j++) {
        arr = [...arr, j + 1 + range * i];
      }
      input = [...input, arr];
      arr = [];
    }
    dispatch({ type: "[GLOBAL] - saveInput", payload: input });
  };

  const handleRotate = () => {
    const { input } = state;
    let newInput: number[][] = [];
    let initialValue: number = 0;

    newInput = input.map((element, indexElement) => {
      if (indexElement === 0) initialValue = element[0] + input.length - 1;
      else initialValue = initialValue - 1;
      return element.map((_, index) =>
        index === 0 ? initialValue : initialValue + input.length * index
      );
    });

    dispatch({ type: "[GLOBAL] - handleRotate", payload: newInput });
  };

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        saveInput,
        handleRotate,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
