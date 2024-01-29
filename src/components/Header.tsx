import Button from "./UI/Button.tsx";
import { useTimersContext } from "../context/TimersContext.tsx";

export default function Header() {
  const timersCtx = useTimersContext();

  function handleStartStop() {
    if (timersCtx.isRunning) {
      timersCtx.stopTimer();
    } else {
      timersCtx.startTimer();
    }
  }

  return (
    <header>
      <h1>ReactTimer</h1>

      <Button onClick={handleStartStop}>
        {timersCtx.isRunning ? "Stop" : "Start"}
      </Button>
    </header>
  );
}
