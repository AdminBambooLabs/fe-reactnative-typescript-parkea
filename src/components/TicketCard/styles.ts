import styled from 'styled-components/native';

export const Wrapper = styled.TouchableOpacity`
  width: 100%;
  padding: 16px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.primaryAlpha};
  gap: 6px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-weight: bold;
  font-size: 20px;
`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.colors.grayText};
  font-size: 16px;
`;
