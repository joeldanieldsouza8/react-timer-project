// This type is used to define the shape of a single timer object
export interface Timer {
  name: string;
  duration: number;
}

// This type represents the state of the timer(s) in your context. The word "State" clarifies that it's about the state structure.
export interface TimerState {
  isRunning: boolean;
  timers: Timer[];
}

// This type includes both the state and the functions provided by the context. The name "Props" is often used in React to represent the properties or values passed down, and in this case, it's what the context provides.
export interface TimerContextProps extends TimerState {
  addTimer: (timerData: Timer) => void;
  startTimer: () => void;
  stopTimer: () => void;
}
