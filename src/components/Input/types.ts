import { ReactNode } from 'react';
import { ControllerProps, FieldValues } from 'react-hook-form';
import { TextInputProps } from 'react-native';

export interface InputProps extends TextInputProps {
  fullWidth?: boolean;
  icon?: ReactNode;
  status?: InputStatus;
  helperText?: string;
  label?: string;
}

export type InputStatus = 'success' | 'error';
export type InputStatusStyles = 'idle' | 'focused' | InputStatus;

export type InputStyleProps = Pick<InputProps, 'fullWidth'> & {
  status: InputStatusStyles;
};

export interface InputWithControllerProps<T extends FieldValues> extends InputProps {
  controllerProps: Omit<ControllerProps<T>, 'render'>;
  secureTextEntry?: boolean;
}
