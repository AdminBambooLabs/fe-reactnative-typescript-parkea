import { ActivityIndicator } from 'react-native';
import { colors } from '@/theme/colors';
import * as Styled from './styles';
import { ButtonProps } from './types';

const Button = ({ children, variant = 'filled', isLoading, ...rest }: ButtonProps) => {
  return (
    <Styled.CustomButton variant={variant} {...rest}>
      {isLoading ? (
        <ActivityIndicator color={colors.white} />
      ) : (
        <Styled.CustomButtonText variant={variant} disabled={rest.disabled}>{children}</Styled.CustomButtonText>
      )}
    </Styled.CustomButton>
  );
};

export default Button;
