import { ReactNode } from 'react';
import { ControllerProps, FieldValues } from 'react-hook-form';
import { MaskedTextInputProps } from 'react-native-mask-text';

export interface InputCurrencyProps extends MaskedTextInputProps {
  fullWidth?: boolean;
  icon?: ReactNode;
  status?: InputStatus;
  helperText?: string;
  label?: string;
}

export type InputStatus = 'success' | 'error';
export type InputStatusStyles = 'idle' | 'focused' | InputStatus;

export type InputStyleProps = Pick<InputCurrencyProps, 'fullWidth'> & {
  status: InputStatusStyles;
};

export interface InputWithControllerProps<T extends FieldValues> extends Omit<InputCurrencyProps, 'onChangeText'> {
  controllerProps: Omit<ControllerProps<T>, 'render'>;
  secureTextEntry?: boolean;
}
