import { ITicket } from '@/types/tickets';

export interface TicketCardProps {
    ticket: ITicket;
    onPress?: () => void;
}
