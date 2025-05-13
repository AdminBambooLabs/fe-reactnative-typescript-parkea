import styled from 'styled-components/native';
import { Button as CustomButton } from '@/components/Button';

export const Wrapper = styled.ScrollView`
  padding: 16px;
  height: 100%;
`;

export const Content = styled.View`
  margin-bottom: 24px;
`;

export const TitleContainer = styled.View`
  gap: 12px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts[700]};
  font-size: 24px;
  text-align: center;
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts[500]};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.grayText};
  text-align: center;
`;

export const Form = styled.View`
  margin-top: 24px;
  gap: 16px;
`;

export const ButtonsContainer = styled.View`
  margin-bottom: 48px;
`;

export const CheckBoxContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px;
`;

export const Button = styled(CustomButton)``;
