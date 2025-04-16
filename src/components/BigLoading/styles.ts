import styled from 'styled-components/native';

export const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 16px;
  height: 100%;
  justify-content: center;
`;

export const CircularLoader = styled.ActivityIndicator`
  margin-bottom: 30px;
`;

export const InfoContainer = styled.View`
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 0 16px;
`;

export const Title = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts[700]};
  font-size: 24px;
`;

export const Description = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts[700]};
  font-size:  16px;
`;
