import { useRef } from "react";

import Button from "./UI/Button.tsx";
import Form, { FormHandle } from "./UI/Form.tsx";
import Input from "./UI/Input.tsx";
import { useTimersContext } from "../context/TimersContext.tsx";

export default function AddTimer() {
  // Create a reference to the form component
  const form = useRef<FormHandle>(null);
  const { addTimer } = useTimersContext(); // Destructure the addTimer function from the context

  // Handle the save event when the form is submitted
  function handleSaveTimer(data: unknown) {
    // Extract the name and duration from the form data
    const extractedData = data as { name: string; duration: string };
    // console.log(extractedData);

    // Create a new timer object
    addTimer({
      name: extractedData.name,
      duration: parseInt(extractedData.duration),
    });

    // Clear the form after saving the timer
    form.current?.clear();
  }

  return (
    // Render the form component
    <Form ref={form} onSave={handleSaveTimer} id="add-timer">
      {/* Render an input field for the timer name */}
      <Input type="text" label="Name" id="name" />

      {/* Render an input field for the timer duration */}
      <Input type="number" label="Duration" id="duration" />

      {/* Render a button to add the timer */}
      <p>
        <Button>Add Timer</Button>
      </p>
    </Form>
  );
}
