import styled from 'styled-components/native';
import ParkeaLogoText from '@/assets/icons/parkea-logo-text.svg';
import { Button as CustomButton } from '@/components/Button';

export const Wrapper = styled.View`
  padding: 90px 16px 16px;
  height: 100%;
  justify-content: space-between;
`;

export const TitlesContainer = styled.View`
  gap: 42px;
`;

export const LogoText = styled(ParkeaLogoText)`
  align-self: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts[700]};
  color: ${({ theme }) => theme.colors.black};
  font-size: 32px;
  align-self: center;
`;

export const Content = styled.View`
  gap: 16px;
`;

export const InputsContainer = styled.View`
  flex-direction: column;
  gap: 16px;
`;

export const Button = styled(CustomButton)``;
