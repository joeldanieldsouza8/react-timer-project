import { Timer, TimerState } from "../@types/timerTypes";

export const initialState: TimerState = {
  timers: [],
  isRunning: false,
};

type TimerAction =
  | { type: "ADD_TIMER"; payload: Timer }
  | { type: "START_TIMER" }
  | { type: "STOP_TIMER" };

export const timerReducer = (
  state: TimerState = initialState,
  action: TimerAction
): TimerState => {
  switch (action.type) {
    case "ADD_TIMER":
      return { ...state, timers: [...state.timers, action.payload] };
    case "START_TIMER":
      return { ...state, isRunning: true };
    case "STOP_TIMER":
      return { ...state, isRunning: false };
    default:
      return state;
  }
};
