import { type VariantProps, cva } from 'class-variance-authority'

export { default as Badge } from './Badge.vue'

export const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        success:
          'border-[#34d399] bg-[#ecfdf5] text-[#059669]  hover:bg-green-200',
        danger: 'border-[#F87171] bg-[#FEF2F2] text-[#dc2626] hover:bg-destructive/30',
        gray: 'border-[#9CA3AF] bg-[#F3F4F6] text-[#374151] hover:bg-secondary/30',
        'danger-overload': 'border-[#B50000] bg-[#F0A3A3] text-[#B50000] hover:bg-destructive/30',
        warning:
          'border-[#FBBF24] bg-[#F2EEDF] text-[#D97706]  hover:bg-orange-200',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
        outline: 'text-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export type BadgeVariants = VariantProps<typeof badgeVariants>
