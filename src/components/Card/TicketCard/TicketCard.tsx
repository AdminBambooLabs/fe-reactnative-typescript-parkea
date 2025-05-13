import dayjs from 'dayjs';
import { Icon } from '../../Icon';
import * as Styled from '../styles';
import { TicketCardProps } from './types';
import CardBase from '../CardBase';
import { colors } from '@/theme/colors';
import { EPriceTableToLabel } from '@/types/tickets';
import { capitalize } from '@/utils';

const TicketCard = ({ ticket, ...rest }: TicketCardProps) => {
  const { plate, checkin, priceTable } = ticket;

  return (
    <CardBase
      {...rest}
      content={
        <>
          <Styled.Title>{plate}</Styled.Title>
          <Styled.Description>Entrada: {dayjs(checkin).format('DD/MM/YYYY [às] HH:mm')}</Styled.Description>
          <Styled.Description>Tabela: {capitalize(EPriceTableToLabel[priceTable])}</Styled.Description>
        </>
      }
      icon={<Icon name="arrow-narrow-right" stroke={colors.pureBlack} />}
    />
  );
};

export default TicketCard;
