import { BadgeVariants } from "@/components/ui/badge";

export const getBadgeColor = (value: string): BadgeVariants['variant'] => {
    switch (value.toLowerCase()) {
        case 'resolved':
        case 'satisfied':
            return 'success';

        case 'follow-up':
        case 'follow up':
        case 'dissatisfied but manageable':
            return 'warning';

        case 'frustrated unmanageable':
        case 'frustrated':
        case 'escalated':
            return 'danger';


        default:
            return 'default';
    }
}