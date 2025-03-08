import { ITicket } from '../../api/services/tickets/types';

export interface TicketCardProps extends Pick<ITicket, 'plate'> {}
