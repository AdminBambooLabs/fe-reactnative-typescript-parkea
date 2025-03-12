import { ITicket } from "@/types/tickets";

// GET
export interface GetTicketsParams {
  ticketId?: string;
}

export type GetTicketsResponse = ITicket[];

// POST
export type PostTicketsParams = Pick<
  ITicket,
  'plate' | 'vehicleType' | 'priceTable'
>;
