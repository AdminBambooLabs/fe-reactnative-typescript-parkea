import * as Styled from './styles';
import { ButtonProps } from './types';

const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <Styled.CustomButton {...rest}>
      <Styled.CustomButtonText>{children}</Styled.CustomButtonText>
    </Styled.CustomButton>
  );
};

export default Button;
