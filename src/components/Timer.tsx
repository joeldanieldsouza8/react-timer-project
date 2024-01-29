import Container from "./UI/Container.tsx";
import { type Timer as TimerProps } from "../@types/timerTypes.ts";
import { useState, useEffect } from "react";
import { useTimersContext } from "../context/TimersContext.tsx";

export default function Timer({ name, duration }: TimerProps) {
  const [remaining, setRemaining] = useState(duration * 1000); // Convert to milliseconds
  const {isRunning} = useTimersContext();

  useEffect(() => {
    if (remaining <= 0 || !isRunning) return; // Prevent timer from starting if already at 0 or not running

    const interval = setInterval(() => {
      setRemaining((prev) => Math.max(prev - 1000, 0)); // Decrement and stop at 0
    }, 1000); // Changed interval to 1000ms for 1-second decrement

    // Cleanup function
    return () => {
      clearInterval(interval); 
    };
  }, [remaining, isRunning]); // Depend on `remaining` and `isRunning` to control the interval

  const formattedRemainingTime = (remaining / 1000).toFixed(2); // Convert to seconds

  return (
    <Container as="article">
      <h2>{name}</h2>
      <p>
        <progress max={duration} value={formattedRemainingTime} />
      </p>

      <p>
        <strong>{formattedRemainingTime}</strong> seconds remaining
      </p>
    </Container>
  );
}
