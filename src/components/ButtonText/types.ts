import { ReactNode } from 'react';
import { TouchableOpacityProps } from 'react-native';

export interface ButtonProps extends TouchableOpacityProps {
  children: string | ReactNode;
  lined?: boolean;
}

export type ButtonTextStyleProps = Pick<ButtonProps, 'lined'>;
