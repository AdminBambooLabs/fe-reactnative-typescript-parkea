import { PressableProps } from 'react-native';

export interface ToggleButtonProps extends Omit<PressableProps, "onPress"> {
  children: string;
  fullWidth?: boolean;
  active?: boolean;
  onPress?: (value: boolean) => void
}

export type ToggleButtonStyleProps = Pick<ToggleButtonProps, 'fullWidth'> & {
  pressed: boolean;
};

export type ToggleButtonTextStyleProps = Pick<ToggleButtonStyleProps, "pressed">;