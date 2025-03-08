import * as Styled from './styles';
import { TicketCardProps } from './types';

const TicketCard = ({ plate = '' }: TicketCardProps) => {
  return (
    <Styled.Wrapper>
      <Styled.Text>{plate}</Styled.Text>
    </Styled.Wrapper>
  );
};

export default TicketCard;
