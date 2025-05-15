import * as Styled from './styles';
import { AvatarProps } from './types';

export function getAvatarText(str: string) {
  const palavras = str.trim().split(/\s+/);

  const primeira = palavras[0]?.slice(0, 1) || '';
  const segunda = palavras[1]?.slice(0, 1) || '';

  return primeira + segunda;
}

const Avatar = ({ name = '' }: AvatarProps) => {
  return (
    <Styled.Wrapper>
      <Styled.Text>{name}</Styled.Text>
    </Styled.Wrapper>
  );
};

export default Avatar;
