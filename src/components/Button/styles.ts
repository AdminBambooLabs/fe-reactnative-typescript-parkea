import { Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Colors } from '@/theme';
import { colors } from '@/theme/colors';
import { ButtonColors, ButtonStyleProps, ButtonVariants, GetButtonColorSetParams } from './types';

const buttonVariantColors: Record<ButtonVariants, keyof Colors> = {
  filled: 'primary',
  ghost: 'transparent',
};

const buttonColors: ButtonColors = {
  primary: colors.primary,
  error: colors.error,
};

const getButtonColorSet = ({ variant, color = 'primary', disabled }: GetButtonColorSetParams) => {
  if (disabled) { return colors.disabled; }

  if (variant === 'ghost') { return buttonVariantColors.ghost; }

  return buttonColors[color];
};

export const CustomButton = styled(TouchableOpacity) <ButtonStyleProps>`
  ${({ fullWidth }) => (fullWidth ? 'width: 100%;' : '')}
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background-color: ${({ variant, color, disabled }) => getButtonColorSet({ variant, color, disabled })};
  border-radius: 24px;
`;

const buttonTextVariantColors: Record<ButtonVariants, keyof Colors> = {
  filled: 'white',
  ghost: 'primary',
};

export const CustomButtonText = styled(Text) <Pick<ButtonStyleProps, 'variant'>>`
  color: ${({ theme, disabled, variant }) => disabled ? theme.colors.grayTextAlpha : theme.colors[buttonTextVariantColors[variant!]]};
  font-family: ${({ theme }) => theme.fonts[500]};
`;
