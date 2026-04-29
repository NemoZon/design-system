import * as React from "react";
import { H2 } from "../atoms/Typography";

const mergeClassName = (base: string, className?: string) =>
  className ? `${base} ${className}` : base;

export type SignInTemplateProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
};

export function SignInTemplate({
  title,
  children,
  className,
  contentClassName,
}: SignInTemplateProps) {
  return (
    <main
      className={mergeClassName(
        "min-h-screen bg-zinc-950 px-6 py-16 text-white",
        className,
      )}
    >
      <div
        className={mergeClassName(
          "mx-auto flex w-full max-w-md flex-col gap-8",
          contentClassName,
        )}
      >
        <H2 className="text-white">{title}</H2>
        {children}
      </div>
    </main>
  );
}
