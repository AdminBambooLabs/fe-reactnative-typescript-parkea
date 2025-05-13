import * as Styled from './styles';
import { CardBaseProps } from './types';

const CardBase = ({ onPress, content, icon, gap = 'md' }: CardBaseProps) => {
  return (
    <Styled.Wrapper onPress={onPress}>
      <Styled.InfoContainer gap={gap}>
        {content}
      </Styled.InfoContainer>
      {icon}
    </Styled.Wrapper>
  );
};

export default CardBase;
