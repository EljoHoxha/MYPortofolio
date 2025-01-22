import React, { HTMLAttributes } from "react";
import { Control } from "react-hook-form";
import { FormField, FormItem, FormLabel } from "./ui/form";
import { Input } from "./ui/input";

interface Props
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "className"> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  name: string;
  label?: string;
  description?: string | React.ReactNode;
  className?: HTMLAttributes<HTMLInputElement>["className"];
}
const FormInput = ({
  name,
  control,
  label,
  description,
  className,
  ...rest
}: Props) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState }) => {
        const { error } = fieldState;
        console.log("Error:", error);

        return (
          <FormItem className={className}>
            {label && (
              <FormLabel className="text-md 2xl:text-lg">{label}</FormLabel>
            )}
            <Input
              {...field}
              className={error ? "border-destructive" : ""}
              {...rest}
            />
            {description ? (
              typeof description === "string" ? (
                <p>{description}</p>
              ) : (
                description
              )
            ) : null}

            {error && <p className="text-destructive">{error.message}</p>}
          </FormItem>
        );
      }}
    />
  );
};

export default FormInput;
