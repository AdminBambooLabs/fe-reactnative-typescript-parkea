import { PressableProps } from 'react-native';

export interface CheckBoxProps extends PressableProps {
  checked?: boolean;
  onCheck?: (value: boolean) => void;
}

export type CheckBoxStyleProps = Pick<CheckBoxProps, 'checked'>;
