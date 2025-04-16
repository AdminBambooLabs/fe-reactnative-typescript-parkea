import { ITicket } from '@/types/tickets';

// GET
export type GetTicketsParams = {
  ticketId?: string;
  plate?: string;
}

export type GetTicketsResponse = ITicket[];

// POST
export type PostTicketsParams = Pick<
  ITicket,
  'plate' | 'vehicleType' | 'priceTable'
>;
