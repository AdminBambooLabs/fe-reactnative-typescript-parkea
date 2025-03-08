import { TouchableOpacityProps } from 'react-native';

export interface ButtonProps extends TouchableOpacityProps {
  children: string;
  fullWidth?: boolean;
}

export type ButtonStyleProps = Pick<ButtonProps, 'fullWidth'>;
