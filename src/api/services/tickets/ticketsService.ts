import { api } from '@/api/api';
import { GetTicketsParams, GetTicketsResponse } from './types';

import { ITicket } from '@/types/tickets';

export function getTickets({ ticketId }: GetTicketsParams = {}) {
  const response = api.get<GetTicketsResponse>(
    `/tickets${ticketId ? `/${ticketId}` : ''}`,
  );
  return response;
}

export function postTicket(ticket: Partial<ITicket> = {}) {
  const response = api.post<GetTicketsResponse>('/tickets', ticket);
  return response;
}

export function patchTicket(ticket: Partial<ITicket> = {}, ticketId: string) {
  const response = api.patch<ITicket>(`/tickets/${ticketId}`, ticket);
  return response;
}

export function deleteTicket(ticketId: string) {
  const response = api.delete<ITicket>(`/tickets/${ticketId}`);
  return response;
}
