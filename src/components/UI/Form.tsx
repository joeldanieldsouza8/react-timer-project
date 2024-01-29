import {
  type FormEvent,
  type ComponentPropsWithoutRef,
  useRef,
  useImperativeHandle,
  forwardRef,
} from "react";

/* 
  Imagine you have a box (component) that you want to pass to someone else (parent component) so they can use it. 
  However, you want to make sure that the person receiving the box can also access something inside the box (a specific element or functionality).
  In React, "forwardRef" is like a special label you put on the box to indicate that it can be passed to someone else. 
  It allows the parent component to receive the box and access its contents or functionality.
  "useRef" is like a key that you use to unlock the box and access its contents. 
  It creates a reference to a specific element or value inside the component. You can think of it as a way to remember and interact with that element or value.
  In the code you provided, "forwardRef" is used to pass the "Form" component to another component while allowing that component to access the "FormHandle" functionality. 
  This allows the parent component to call the "clear" function on the "Form" component.
  "useRef" is used to create a reference to the HTML form element inside the "Form" component. 
  This reference is then used in the "useImperativeHandle" hook to expose the "clear" function to the parent component.
  So, in summary, "forwardRef" allows a component to be passed to another component while preserving its functionality, and "useRef" allows you to create a reference to a specific element or value inside a component.
*/

export type FormHandle = {
  clear: () => void;
};

type FormProps = ComponentPropsWithoutRef<"form"> & {
  onSave: (value: unknown) => void;
};

const Form = forwardRef<FormHandle, FormProps>(function Form(
  { onSave, children, ...otherProps },
  ref
) {
  const form = useRef<HTMLFormElement>(null);

  useImperativeHandle(ref, () => {
    return {
      clear() {
        console.log("CLEARING");
        form.current?.reset();
      },
    };
  });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    onSave(data);
  }

  return (
    <form onSubmit={handleSubmit} {...otherProps} ref={form}>
      {children}
    </form>
  );
});

export default Form;
