import * as React from "react";
import { BodyExtraSmall } from "./Typography";

const mergeClassName = (base: string, className?: string) =>
  className ? `${base} ${className}` : base;

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  containerClassName?: string;
  labelClassName?: string;
};

export function Input({
  label,
  required,
  containerClassName,
  labelClassName,
  className,
  id,
  ...props
}: InputProps) {
  const autoId = React.useId();
  const inputId = id ?? autoId;

  return (
    <div className={mergeClassName("flex flex-col gap-2", containerClassName)}>
      {label ? (
        <label
          className={mergeClassName(
            "text-2xl font-light tracking-wide text-white flex",
            labelClassName,
          )}
          htmlFor={inputId}
        >
          <BodyExtraSmall>{label}</BodyExtraSmall>
          {required ? (
            <BodyExtraSmall className="ml-2 text-red-500">*</BodyExtraSmall>
          ) : null}
        </label>
      ) : null}
      <input
        id={inputId}
        required={required}
        className={mergeClassName(
          "h-10 w-full border border-white/70 bg-transparent px-4 text-xl font-light tracking-wide text-white placeholder:text-zinc-500 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/40",
          className,
        )}
        {...props}
      />
    </div>
  );
}
