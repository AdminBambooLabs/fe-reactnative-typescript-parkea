import { GetTicketsParams, GetTicketsResponse, ITicket } from './types';
import { api } from '../../api';

import mockGetTickets from "@/../mocks/getTickets.json"

export function getTickets({ ticketId }: GetTicketsParams = {}) {
  // const response = api.get<GetTicketsResponse>(
  //   `/tickets${ticketId ? `/${ticketId}` : ''}`,
  // );
  // console.log('getTickets', response)
  // return response;

  return { data: mockGetTickets, status: 200 };
}

export function postTicket(ticket: Partial<ITicket> = {}) {
  const response = api.post<GetTicketsResponse>('/tickets', ticket);
  return response;
}

export function updateTicket(ticket: Partial<ITicket> = {}) {
  const response = api.patch<GetTicketsResponse>('/tickets', ticket);
  return response;
}
