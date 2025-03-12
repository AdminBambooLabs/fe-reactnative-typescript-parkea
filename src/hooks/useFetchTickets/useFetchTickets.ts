import { useEffect, useState } from 'react';
import {
  GetTicketsParams,
  PostTicketsParams,
  getTickets,
  postTicket,
  patchTicket
} from '@/api/services/tickets';
import { ITicket } from '@/types/tickets';

function useFetchTickets() {
  const [tickets, setTickets] = useState<ITicket[]>([]);
  const [isLoading, setIsLoading] = useState(false);

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

  async function createTicket(ticket: PostTicketsParams) {
    try {
      const createdTicket = await postTicket({ ...ticket, status: 'open' });
      if (createdTicket.status === 200) {
        return postTicket({ ...ticket, status: 'open' });
      }
    } catch {
      return null;
    }
  };

  async function updateTicket(ticket: Partial<ITicket>, ticketId: string) {
    try {
      setIsLoading(true)
      const updatedTicket = await patchTicket(ticket, ticketId);

      if (updatedTicket.status === 200) {
        return updatedTicket.data
      }
    } catch {
      return null;
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchTickets();
  }, []);

  return {
    fetchTickets,
    createTicket,
    updateTicket,
    tickets,
    isLoading,
  };
}

export default useFetchTickets;
