import {
  type ReactNode,
  type ElementType,
  type ComponentPropsWithoutRef,
} from 'react';

/* 
  ReactNode: This type represents any valid React node, which can be a component, an HTML element, or even a string. It is a very flexible type that allows you to pass any valid React content as children to the Container component.
  ElementType: This type represents the type of an element in React. It can be either a string representing an HTML tag name (e.g., 'div', 'span', 'button') or a reference to a React component. By using this type, you can specify the type of the as prop in the Container component, which allows you to render the container as a different element or component.
  ComponentPropsWithoutRef: This type is a utility type provided by React that extracts the props of a component, excluding the ref prop. It ensures that the Container component can accept any props that the specified as element or component can accept, except for the ref prop.
*/

type ContainerProps<T extends ElementType> = {
  as?: T; 
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

export default function Container<C extends ElementType>({
  as,
  children,
  ...props
}: ContainerProps<C>) {
  const Component = as || 'div';
  return (
    <Component {...props}>
      {children}
    </Component>
  );
}
