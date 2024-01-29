import { type ComponentPropsWithoutRef } from 'react';

/* 
  The ComponentPropsWithoutRef type can be used to grab all the native attributes of an HTML element as the props type of your component. 
*/

// This type has all the native attributes of a button element, but not the ref attribute.
type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  href?: never;
};

type AnchorProps = ComponentPropsWithoutRef<'a'> & {
  href?: string;
};

type Props = ButtonProps | AnchorProps;

/*
  The isAnchorProps method in the provided code is a type guard function. 
  It helps determine whether the given props object belongs to the AnchorProps type or the ButtonProps type.
  To understand this concept, let's use an analogy. 
  Imagine you have a box that can contain either a toy car or a toy plane. 
  You want to know what type of toy is inside the box without opening it. 
  So, you shake the box and listen for a specific sound. 
  If you hear the sound of wheels, you can confidently say that the box contains a toy car. 
  Similarly, if you hear the sound of propellers, you can conclude that the box contains a toy plane.
  In the code, the isAnchorProps function acts as the "shaker" for the props object. 
  It checks whether the props object has the href property. 
  If it does, it means the props object belongs to the AnchorProps type. 
  If it doesn't have the href property, it means the props object belongs to the ButtonProps type.
  By using the isAnchorProps function, the code can conditionally render either an <a> element or a <button> element based on the type of props passed to the Button component. 
  This allows the component to handle both button-like and anchor-like behavior.
*/
function isAnchorProps(props: Props): props is AnchorProps {
  return 'href' in props;
}

/* 
  The Button function is a React component that renders a button element or an anchor element based on the props it receives. 
  It accepts two types of props: ButtonProps and AnchorProps.
  Now, let's use an analogy to help you understand this concept better. 
  Imagine you have a magical box that can transform into either a car or a plane. 
  You want to use this box to transport toys, but you need to know what type of toy it should carry.
  In our analogy, the Button component is like the magical box, and the props it receives are like the toys you want to transport. 
  The ButtonProps represent the car, and the AnchorProps represent the plane.
  To determine what type of toy (props) the Button component should render, it uses a special function called isAnchorProps. 
  This function acts like a "toy detector" that checks if the props have a specific property called href. 
  If the href property exists, it means the props belong to the AnchorProps type (plane). 
  If the href property doesn't exist, it means the props belong to the ButtonProps type (car).
  Based on the result of the isAnchorProps function, the Button component conditionally renders either an anchor element (<a>) or a button element (<button>). 
  It applies the className="button" to both elements to give them a consistent styling.
  So, just like the magical box transforms into either a car or a plane based on the toy it carries, the Button component renders either a button or an anchor element based on the props it receives.
*/ 
export default function Button(props: ButtonProps | AnchorProps) {
  if (isAnchorProps(props)) {
    return <a className="button" {...props}></a>;
  }

  return <button className="button" {...props}></button>;
}
