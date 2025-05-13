import * as Styled from './styles';
import { Icon } from '../../Icon';
import CardBase from '../CardBase';
import { PriceTableCardProps } from './types';

const PriceTableCard = ({ title, content, ...rest }: PriceTableCardProps) => {
  return (
    <CardBase
      {...rest}
      content={
        <>
          <Styled.Title>{title}</Styled.Title>
          {content}
        </>
      }
      icon={
        <Styled.IconContainer>
          <Icon name="edit-pen" />
          <Styled.IconLegend>Editar</Styled.IconLegend>
        </Styled.IconContainer>
      }
    />
  );
};

export default PriceTableCard;
