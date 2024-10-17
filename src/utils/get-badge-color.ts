import { BadgeVariants } from "@/components/ui/badge";

export const getBadgeColor = (value: string): BadgeVariants['variant'] => {
    switch (value.toLowerCase()) {
        case 'resolved':
        case 'satisfied':
        case 'low':
        case 'triggered':
            return 'success';

        case 'follow-up':
        case 'follow up':
        case 'dissatisfied but manageable':
        case 'medium':
            return 'warning';

        case 'frustrated unmanageable':
            return 'danger-overload';

        case 'frustrated':
        case 'high':
        case 'not triggered':
            return 'danger';

        case 'not required':
            return 'gray';

        case 'scheduled':
            return 'danger';


        default:
            return 'default';
    }
}