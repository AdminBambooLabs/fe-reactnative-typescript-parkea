import styled from 'styled-components/native';
import { Button as CustomButton } from '@/components/Button';

export const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 16px;
  height: 100%;
  justify-content: center;
`;

export const InfoContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`

export const Text = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts[700]};
  font-size: 32px;
`;

export const Button = styled(CustomButton)`
  align-self: flex-end;
`;