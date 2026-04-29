import * as React from "react";

type TrashIconProps = {
  className?: string;
};

const TrashIcon = ({ className }: TrashIconProps) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M3 6h18" />
    <path d="M8 6V4h8v2" />
    <path d="M19 6l-1 14H6L5 6" />
    <path d="M10 11v5" />
    <path d="M14 11v5" />
  </svg>
);

export type UserCardProps = React.HTMLAttributes<HTMLElement> & {
  name: string;
  role: string;
  onDelete?: () => void;
};

export function UserCard({
  name,
  role,
  onDelete,
  className,
  ...props
}: UserCardProps) {
  return (
    <article
      className={
        "flex items-center justify-between gap-4 rounded border border-zinc-200 bg-white p-4 text-zinc-900 shadow-sm dark:border-white/10 dark:bg-zinc-950/60 dark:text-white" +
        (className ? ` ${className}` : "")
      }
      {...props}
    >
      <div className="min-w-0">
        <h3 className="truncate text-lg font-bold">{name}</h3>
        <p className="truncate text-sm text-zinc-600 dark:text-zinc-300">
          {role}
        </p>
      </div>

      <button
        type="button"
        onClick={onDelete}
        aria-label={`Delete user ${name}`}
        className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-700 transition hover:bg-red-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 dark:bg-red-950/40 dark:text-red-300 dark:hover:bg-red-950 dark:focus-visible:ring-red-300 dark:focus-visible:ring-offset-zinc-950"
      >
        <TrashIcon aria-hidden="true" className="h-5 w-5" />
      </button>
    </article>
  );
}
