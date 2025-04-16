import * as Styled from './styles';
import { AvatarProps } from './types';

const Avatar = ({ name = '' }: AvatarProps) => {
  return (
    <Styled.Wrapper>
      <Styled.Text>{name}</Styled.Text>
    </Styled.Wrapper>
  );
};

export default Avatar;
