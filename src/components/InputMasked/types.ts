import { ReactNode } from 'react';
import { ControllerProps, FieldValues } from 'react-hook-form';
import { MaskedTextInputProps } from 'react-native-advanced-input-mask/lib/typescript/src/types';

export interface InputMaskProps extends MaskedTextInputProps {
  fullWidth?: boolean;
  icon?: ReactNode;
  status?: InputStatus;
  helperText?: string;
  label?: string;
}

export type InputStatus = 'success' | 'error';
export type InputStatusStyles = 'idle' | 'focused' | InputStatus;

export type InputStyleProps = Pick<InputMaskProps, 'fullWidth'> & {
  status: InputStatusStyles;
};

export interface InputWithControllerProps<T extends FieldValues> extends Omit<InputMaskProps, 'onChangeText'> {
  controllerProps: Omit<ControllerProps<T>, 'render'>;
  secureTextEntry?: boolean;
  useRawValue?: boolean;
}
