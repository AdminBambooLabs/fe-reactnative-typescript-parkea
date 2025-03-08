import { TicketCard } from '@/components/TicketCard';
import { useFetchTickets } from '@/hooks/useFetchTickets';
import * as Styled from './styles';

function ParkingResume() {
  const { tickets, fetchTickets, isLoading } = useFetchTickets();

  return (
    <Styled.Wrapper>
      <Styled.Text>Carros no pátio: </Styled.Text>
      <Styled.List data={tickets} refreshing={isLoading} onRefresh={fetchTickets} renderItem={({ item, index }) => {
        return (
          <TicketCard
            key={`ticket-${index}-${item.plate}`}
            plate={item.plate}
          />
        );
      }} />
    </Styled.Wrapper>
  );
}

export default ParkingResume;
