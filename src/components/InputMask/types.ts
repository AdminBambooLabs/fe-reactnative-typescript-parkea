import { ReactNode } from 'react';
import { MaskedTextInputProps } from 'react-native-mask-text';

export interface InputMaskProps extends MaskedTextInputProps {
    fullWidth?: boolean;
    icon?: ReactNode;
}
export type InputMaskStyleProps = Pick<InputMaskProps, "fullWidth"> & {
    isFocused?: boolean;
}