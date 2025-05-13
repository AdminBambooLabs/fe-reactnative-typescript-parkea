import { CardCommonProps } from '../types';
import { ITicket } from '@/types/tickets';

export interface TicketCardProps extends CardCommonProps {
  ticket: ITicket;
}
