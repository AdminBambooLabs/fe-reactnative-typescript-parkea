import { ControllerProps, FieldValues } from 'react-hook-form';

export type InputStatus = 'success' | 'error';

export interface InputCodeProps {
  value?: string;
  onChangeText?: (value: string) => void;
  status?: InputStatus;
  helperText?: string;
  codeLength?: number;
}

export type InputStatusStyles = 'idle' | InputStatus;
export type CodeInputStyleProps = {
  status: InputStatusStyles;
};

export interface InputWithControllerProps<T extends FieldValues> extends InputCodeProps {
  controllerProps: Omit<ControllerProps<T>, 'render'>;
}
