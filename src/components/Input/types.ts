import { TextInputProps } from 'react-native';

export interface InputProps extends TextInputProps {
    fullWidth?: boolean;
}
export type InputStyleProps = Pick<InputProps, "fullWidth">