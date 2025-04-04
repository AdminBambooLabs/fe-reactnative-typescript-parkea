import { Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { ButtonStyleProps, ButtonVariants } from './types';
import { Colors } from '@/theme';

const buttonVariantColors: Record<ButtonVariants, keyof Colors> = {
  filled: 'primary',
  ghost: 'transparent'
}

export const CustomButton = styled(TouchableOpacity) <ButtonStyleProps>`
  ${({ fullWidth }) => (fullWidth ? 'width: 100%;' : '')}
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background-color: ${({ theme, variant, disabled }) => disabled ? theme.colors.disabled : theme.colors[buttonVariantColors[variant!]]};
  border-radius: 24px;
`;

const buttonTextVariantColors: Record<ButtonVariants, keyof Colors> = {
  filled: 'white',
  ghost: 'primary'
}

export const CustomButtonText = styled(Text) <Pick<ButtonStyleProps, "variant">>`
  color: ${({ theme, disabled, variant }) => disabled ? theme.colors.gray : theme.colors[buttonTextVariantColors[variant!]]};
  font-weight: 500;
`;
