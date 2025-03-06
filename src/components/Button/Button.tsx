import {ButtonProps} from './types';
import * as Styled from './styles';

const Button = ({children, ...rest}: ButtonProps) => {
  return (
    <Styled.CustomButton {...rest}>
      <Styled.CustomButtonText>{children}</Styled.CustomButtonText>
    </Styled.CustomButton>
  );
};

export default Button;
