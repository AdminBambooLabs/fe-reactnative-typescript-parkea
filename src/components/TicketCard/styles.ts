import styled from 'styled-components/native';

export const Wrapper = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 16px 20px 16px 16px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.primaryAlpha};
`;

export const InfoContainer = styled.View`
  gap: 6px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts[700]};
  color: ${({ theme }) => theme.colors.black};
  font-size: 20px;
`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.colors.grayText};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts[500]};
`;
