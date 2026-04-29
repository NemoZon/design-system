import { cva, type VariantProps } from 'class-variance-authority'

export const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-none border font-light tracking-wide leading-none transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        outline:
          'border-zinc-900 bg-transparent text-zinc-900 hover:bg-zinc-900/10 focus-visible:ring-zinc-900 focus-visible:ring-offset-white dark:border-white dark:text-white dark:hover:bg-white/10 dark:focus-visible:ring-white dark:focus-visible:ring-offset-black',
        solid:
          'border-zinc-900 bg-zinc-900 text-white hover:bg-zinc-800 focus-visible:ring-zinc-900 focus-visible:ring-offset-white dark:border-white dark:bg-white dark:text-black dark:hover:bg-zinc-100 dark:focus-visible:ring-black dark:focus-visible:ring-offset-white',
      },
      size: {
        sm: 'h-8 px-3 text-xs',
        md: 'h-10 px-5 text-sm',
        lg: 'h-12 px-7 text-base',
      },
    },
    defaultVariants: {
      variant: 'outline',
      size: 'md',
    },
  },
)

export type ButtonVariants = VariantProps<typeof buttonVariants>
