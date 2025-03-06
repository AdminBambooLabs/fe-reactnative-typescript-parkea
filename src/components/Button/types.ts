import {TouchableOpacityProps} from 'react-native';

export interface ButtonProps extends TouchableOpacityProps {
  children: string;
  fullWidth?: boolean;
}

export interface ButtonStyleProps extends Pick<ButtonProps, 'fullWidth'> {}
