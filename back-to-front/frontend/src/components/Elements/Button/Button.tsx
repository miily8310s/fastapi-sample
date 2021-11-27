import { ButtonHTMLAttributes, forwardRef } from "react";

const variants = {
  primary: "aaa",
};
const sizes = {
  md: "aaa",
};

export type ButtonProps = {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type = "button",
      className = "",
      variant = "primary",
      size = "md",
      ...props
    },
    ref
  ) => {
    return (
      <button ref={ref} type={type} {...props}>
        <span>{props.children}</span>
      </button>
    );
  }
);
