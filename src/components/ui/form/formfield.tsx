import React, { FC, ReactNode, ChangeEvent } from "react";
import Label from "@/components/form/Label";
import { Input } from "@/components/ui/input";

interface FormFieldProps {
  label: string;
  htmlFor?: string;
  type?: string;
  placeholder?: string;
  size?: "sm" | "md" | "lg" | "xl";
  icon?: ReactNode;
  name: string;
  disabled?: boolean;
  value?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const FormField: FC<FormFieldProps> = ({
  label,
  htmlFor,
  type = "text",
  placeholder,
  size = "md",
  icon,
  name,
  disabled = false,
  value,
  onChange,
}) => {
  return (
    <div className="flex w-full flex-row gap-5 items-center">
      <Label size={size} htmlFor={htmlFor} className="flex items-center justify-center">
        {label}
      </Label>
      <div className="flex-grow">
        <Input
          type={type}
          id={htmlFor}
          name={name}
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          onChange={onChange}
          className={`w-full   ${icon ? "pl-10" : ""} 
            ${disabled ? "border-none bg-transparent" : "border border-gray-300 dark:border-gray-700"}`} // ✅ disabled 상태일 때 border 제거
        />
        {icon && (
          <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
            {icon}
          </span>
        )}
      </div>
    </div>
  );
};

export default FormField;
