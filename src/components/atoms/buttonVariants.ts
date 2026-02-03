import { cva, type VariantProps } from 'class-variance-authority'

export const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-none border font-light tracking-wide transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        outline:
          'border-white bg-transparent text-white hover:bg-white/10 focus-visible:ring-white focus-visible:ring-offset-black',
        solid:
          'border-white bg-white text-black hover:bg-zinc-100 focus-visible:ring-black focus-visible:ring-offset-white',
      },
      size: {
        sm: 'h-10 px-6 text-base',
        md: 'h-12 px-10 text-lg',
        lg: 'h-16 px-14 text-2xl',
      },
    },
    defaultVariants: {
      variant: 'outline',
      size: 'md',
    },
  },
)

export type ButtonVariants = VariantProps<typeof buttonVariants>
