import React, { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface LabelProps {
  htmlFor?: string;
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const sizeClasses = {
  sm: "w-10",
  md: "w-20",
  lg: "w-40",
  xl: "w-60",
};

const Label: FC<LabelProps> = ({ htmlFor, children, className, size = "md" }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={twMerge(
        "2xsm:text-xs xsm:text-md xsm:w-80 mb-1.5 block font-medium text-gray-700 dark:text-gray-400",
        sizeClasses[size], // Apply the size class based on props
        className
      )}
    >
      {children}
    </label>
  );
};

export default Label;
