import { cva, VariantProps } from 'class-variance-authority'

export { default as Tabs } from './Tabs.vue'
export { default as TabsTrigger } from './TabsTrigger.vue'
export { default as TabsList } from './TabsList.vue'
export { default as TabsContent } from './TabsContent.vue'


export const tabVariants = cva('inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50', {
    variants: {
        theme: {
            default: 'data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm',
            outline: 'text-[#5E6268] text-data-[state=active]:bg-transparent data-[state=active]:text-[#FD4F00] data-[state=active]:shadow-sm'
        }
    },
    defaultVariants: {
        theme: 'default'
    }
});


export type TabVariants = VariantProps<typeof tabVariants>
