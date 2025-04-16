import dayjs from 'dayjs';
import { colors } from '@/theme/colors';
import { EPriceTableToLabel } from '@/types/tickets';
import { capitalize } from '@/utils';
import * as Styled from './styles';
import { TicketCardProps } from './types';
import { Icon } from '../Icon';

const TicketCard = ({ ticket, onPress }: TicketCardProps) => {
  const { plate, checkin, priceTable } = ticket;

  return (
    <Styled.Wrapper onPress={onPress}>
      <Styled.InfoContainer>
        <Styled.Title>{plate}</Styled.Title>
        <Styled.Description>Entrada: {dayjs(checkin).format('DD/MM/YYYY [às] HH:mm')}</Styled.Description>
        <Styled.Description>Tabela: {capitalize(EPriceTableToLabel[priceTable])}</Styled.Description>
      </Styled.InfoContainer>
      <Icon name="arrow-narrow-right" stroke={colors.pureBlack} />
    </Styled.Wrapper>
  );
};

export default TicketCard;
