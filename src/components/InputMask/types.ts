import { MaskedTextInputProps } from 'react-native-mask-text';

export interface InputMaskProps extends MaskedTextInputProps {
    fullWidth?: boolean;
}
export type InputMaskStyleProps = Pick<InputMaskProps, "fullWidth">