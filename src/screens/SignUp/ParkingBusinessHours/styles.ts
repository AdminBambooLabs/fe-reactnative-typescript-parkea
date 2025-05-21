import { StyleProp, ViewStyle } from 'react-native';
import styled from 'styled-components/native';
import { Button as CustomButton } from '@/components/Button';

export const Wrapper = styled.ScrollView``;

export const Content = styled.View`
  flex: 1;
`;

export const contentContainerStyle: StyleProp<ViewStyle> = {
  flexGrow: 1,
  padding: 16,
  justifyContent: 'space-between',
  gap: 16,
};

export const TitleContainer = styled.View`
  gap: 12px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts[700]};
  font-size: 24px;
  text-align: center;
`;

export const SectionTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts[700]};
  font-size: 20px;
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

export const RowWithTitle = styled.View`
  gap: 8px;
  align-items: flex-start;
`;

export const ButtonsContainer = styled.View``;

export const CheckBoxContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px;
`;

export const Button = styled(CustomButton)``;
