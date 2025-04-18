import { api } from '@/api/api';
import { ITicket } from '@/types/tickets';
import { GetTicketsParams } from './types';


export function getTickets({ ticketId, plate }: GetTicketsParams = {}) {


  const response = api.get<ITicket[]>(
    `/tickets${ticketId ? `/${ticketId}` : ''}`,
    {
      params: {
        plate,
      },
    },
  );
  return response;
}

export function postTicket(ticket: Partial<ITicket> = {}) {
  const response = api.post<ITicket>('/tickets', ticket);
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
