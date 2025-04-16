import { TouchableOpacityProps } from 'react-native';
import { Colors } from '@/theme';

export type ButtonVariants = 'filled' | 'ghost'
export type ButtonColors = Pick<Colors, 'primary' | 'error'>

export interface ButtonProps extends TouchableOpacityProps {
  children: string;
  fullWidth?: boolean;
  variant?: ButtonVariants;
  color?: keyof ButtonColors;
  isLoading?: boolean;
}

export type ButtonStyleProps = Pick<ButtonProps, 'fullWidth' | 'variant' | 'color'>;

export type GetButtonColorSetParams = Pick<ButtonProps, 'color' | 'disabled' | 'variant'>
