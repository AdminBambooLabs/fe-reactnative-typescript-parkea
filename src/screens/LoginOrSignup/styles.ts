import styled from 'styled-components/native';

export const Wrapper = styled.View`
  padding: 16px;
  height: 100%;
  justify-content: center;
`;

export const Content = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const Slide = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Tittle = styled.Text`
  font-family: ${({ theme }) => theme.fonts[700]};
  color: ${({ theme }) => theme.colors.black};
  font-size: 32px;
  text-align: center;
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts[500]};
  color: ${({ theme }) => theme.colors.grayText};
  text-align: center;
  font-size: 16px;
`;

export const ButtonsContainer = styled.View`
  justify-content: space-between;
  width: 100%;
  gap: 8px;
  align-self: flex-end;
`;
