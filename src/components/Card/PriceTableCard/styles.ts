import styled from 'styled-components/native';

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts[700]};
  color: ${({ theme }) => theme.colors.black};
  font-size: 16px;
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts[500]};
  color: ${({ theme }) => theme.colors.grayText};
  font-size: 16px;
`;

export const IconContainer = styled.View`
  align-items: center;
  gap: 4px;
`;

export const IconLegend = styled.Text`
  font-family: ${({ theme }) => theme.fonts[500]};
  color: ${({ theme }) => theme.colors.grayText};
  font-size: 12px;
`;
