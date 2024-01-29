import { createContext, ReactNode, useContext, useReducer } from "react";
import { Timer, TimerContextProps } from "../@types/timerTypes";
import { initialState, timerReducer } from "../reducers/timerReducer";

const TimersContext = createContext<TimerContextProps | null>(null);

function useTimersContext() {
  const context = useContext(TimersContext);

  if (context === null) {
    throw new Error(
      "useTimersContext must be used within a TimersProvider. Wrap a parent component in <TimersProvider> to fix this error."
    );
  }

  return context;
}

function TimersProvider({ children }: { children: ReactNode }) {
  const [timerState, dispatch] = useReducer(timerReducer, initialState); // Removed type arguments

  function addTimer(timerData: Timer) {
    dispatch({ type: "ADD_TIMER", payload: timerData });
  }

  function startTimer() {
    dispatch({ type: "START_TIMER" });
  }

  function stopTimer() {
    dispatch({ type: "STOP_TIMER" });
  }

  const value: TimerContextProps = {
    timers: timerState.timers,
    isRunning: timerState.isRunning,
    addTimer,
    startTimer,
    stopTimer,
  };

  return (
    <TimersContext.Provider value={value}>{children}</TimersContext.Provider>
  );
}

export { TimersProvider, useTimersContext };
