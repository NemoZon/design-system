import { Input, type InputProps } from "../atoms/Input";

export type FormFieldProps = InputProps & {
  hint?: string;
};

export function FormField({ hint, containerClassName, ...props }: FormFieldProps) {
  return (
    <div className="flex w-full flex-col gap-2">
      <Input containerClassName={containerClassName} {...props} />
      {hint ? <p className="text-xs text-zinc-500">{hint}</p> : null}
    </div>
  );
}
