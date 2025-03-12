import * as Styled from './styles';
import { TicketCardProps } from './types';

const TicketCard = ({ ticket, onPress }: TicketCardProps) => {
  const { plate } = ticket;

  return (
    <Styled.Wrapper onPress={onPress}>
      <Styled.Text>{plate}</Styled.Text>
    </Styled.Wrapper>
  );
};

export default TicketCard;
