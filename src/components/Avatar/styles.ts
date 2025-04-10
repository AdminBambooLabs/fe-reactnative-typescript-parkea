import styled from 'styled-components/native';

export const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 100%;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts[500]};
`;