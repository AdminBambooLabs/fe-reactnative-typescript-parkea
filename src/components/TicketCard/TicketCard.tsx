import dayjs from 'dayjs';
import * as Styled from './styles';
import { TicketCardProps } from './types';
import { EPriceTableToLabel } from '@/types/tickets';
import { capitalize } from '@/utils';

const TicketCard = ({ ticket, onPress }: TicketCardProps) => {
  const { plate, checkin, priceTable } = ticket;

  return (
    <Styled.Wrapper onPress={onPress}>
      <Styled.Title>{plate}</Styled.Title>
      <Styled.Description>Entrada: {dayjs(checkin).format('DD/MM/YYYY [às] HH:mm')}</Styled.Description>
      <Styled.Description>Tabela: {capitalize(EPriceTableToLabel[priceTable])}</Styled.Description>
    </Styled.Wrapper>
  );
};

export default TicketCard;
