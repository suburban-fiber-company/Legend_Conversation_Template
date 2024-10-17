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
            return 'danger-overload';

        case 'frustrated':
        case 'escalated':
            return 'danger';

        case 'scheduled':
            return 'danger';


        default:
            return 'default';
    }
}