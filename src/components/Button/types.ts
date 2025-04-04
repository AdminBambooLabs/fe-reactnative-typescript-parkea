import { TouchableOpacityProps } from 'react-native';

export type ButtonVariants = 'filled' | 'ghost'

export interface ButtonProps extends TouchableOpacityProps {
  children: string;
  fullWidth?: boolean;
  variant?: ButtonVariants;
}

export type ButtonStyleProps = Pick<ButtonProps, 'fullWidth' | 'variant'>;
