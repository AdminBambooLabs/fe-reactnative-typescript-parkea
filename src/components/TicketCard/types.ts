import { ITicket } from '../../api/services/tickets/types';

export interface TicketCardProps {
    ticket: ITicket;
    onPress?: () => void;
}
