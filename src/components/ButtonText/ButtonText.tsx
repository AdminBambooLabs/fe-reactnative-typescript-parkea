import * as Styled from './styles';
import { ButtonProps } from './types';

const ButtonText = ({ children, lined, ...rest }: ButtonProps) => {
  return (
    <Styled.CustomButton {...rest}>
      <Styled.CustomButtonText disabled={rest.disabled} lined={lined}>{children}</Styled.CustomButtonText>
    </Styled.CustomButton>
  );
};

export default ButtonText;
