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
            "flex tracking-wide text-zinc-900 dark:text-white",
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
          "h-10 w-full border border-zinc-300 bg-transparent px-3 text-sm font-light tracking-wide text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900/30 dark:border-white/70 dark:text-white dark:placeholder:text-zinc-500 dark:focus:border-white dark:focus:ring-white/40",
          className,
        )}
        {...props}
      />
    </div>
  );
}
