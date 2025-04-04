import * as Styled from './styles';
import { ToggleButtonProps } from './types';

const ToggleButton = ({ children, active = false, onPress, ...rest }: ToggleButtonProps) => {

  return (
    <Styled.CustomToggleButton
      onPress={() => {
        onPress?.(!active)
      }}
      pressed={active} {...rest}>
      <Styled.CustomToggleButtonText pressed={active} disabled={rest.disabled!}>{children}</Styled.CustomToggleButtonText>
    </Styled.CustomToggleButton>
  );
};

export default ToggleButton;
