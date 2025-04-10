import { ReactNode } from 'react';
import { TextInputProps } from 'react-native';

export interface InputProps extends TextInputProps {
    fullWidth?: boolean;
    icon?: ReactNode;
}
export type InputStyleProps = Pick<InputProps, "fullWidth"> & {
    isFocused?: boolean;
}