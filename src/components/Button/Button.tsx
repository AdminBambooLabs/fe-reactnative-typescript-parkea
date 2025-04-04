import * as Styled from './styles';
import { ButtonProps } from './types';

const Button = ({ children, variant = 'filled', ...rest }: ButtonProps) => {
  return (
    <Styled.CustomButton variant={variant} {...rest}>
      <Styled.CustomButtonText variant={variant} disabled={rest.disabled}>{children}</Styled.CustomButtonText>
    </Styled.CustomButton>
  );
};

export default Button;
