import { GlobalState } from ".";

type GlobalActionType =
  | { type: "[GLOBAL] - saveInput"; payload: number[][] }
  | { type: "[GLOBAL] - handleRotate"; payload: number[][] };

export const globalReducer = (
  state: GlobalState,
  action: GlobalActionType
): GlobalState => {
  switch (action.type) {
    case "[GLOBAL] - saveInput":
      return {
        ...state,
        isShowButtonRotate: true,
        input: action.payload,
      };
    case "[GLOBAL] - handleRotate":
      return {
        ...state,
        isShowButtonRotate: false,
        input: action.payload,
      };
    default:
      return state;
  }
};
