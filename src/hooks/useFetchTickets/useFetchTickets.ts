import { useEffect, useState } from 'react';
import {
  GetTicketsParams,
  PostTicketsParams,
  getTickets,
  postTicket,
} from '@/api/services/tickets';
import { ITicket } from '@/types/tickets';

function useFetchTickets() {
  const [tickets, setTickets] = useState<ITicket[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const createTicket = (ticket: PostTicketsParams) => {
    return postTicket({ ...ticket, status: 'open' });
  };

  // const createTicket = (ticket: PostTicketsParams) => {
  //   return updateTicket({ ...ticket, status: 'open' });
  // };

  async function fetchTickets(ticketId?: string) {
    try {
      setIsLoading(true)
      const params: GetTicketsParams = {}

      if (ticketId) params.ticketId = ticketId;

      const { data, status } = await getTickets();
      if (status === 200) setTickets(data)
    } catch {
      setTickets([])
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchTickets();
  }, []);

  return {
    createTicket,
    fetchTickets,
    tickets,
    isLoading,
  };
}

export default useFetchTickets;
