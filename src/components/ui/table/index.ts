import { cva, VariantProps } from 'class-variance-authority'

export { default as Table } from './Table.vue'
export { default as TableBody } from './TableBody.vue'
export { default as TableCell } from './TableCell.vue'
export { default as TableHead } from './TableHead.vue'
export { default as TableHeader } from './TableHeader.vue'
export { default as TableFooter } from './TableFooter.vue'
export { default as TableRow } from './TableRow.vue'
export { default as TableCaption } from './TableCaption.vue'
export { default as TableEmpty } from './TableEmpty.vue'


export const tableRowVariants = cva(
    '',
    {
        variants: {
            color: {
                default: '',
                gray: 'bg-gray-100 text-slate-900',
                danger: 'bg-[#FFCCCC] text-[#0F151F]',
                warning: 'bg-[#F7F1D3] text-[#0F151F]',
                success: 'bg-[#CDEAE1] text-[#0F151F]',
            },
            base: {
                default: '',
                colored: 'border-b border-black',
            }
        },
        defaultVariants: {
            color: 'default',
        },
    },
)

export type TableRowVariants = VariantProps<typeof tableRowVariants>
