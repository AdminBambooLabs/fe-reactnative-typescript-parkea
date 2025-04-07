import * as Styled from './styles';
import { LabelProps } from './types';

const Label = ({ children, size = 'md', ...rest }: LabelProps) => {
  return (
    <Styled.CustomLabel size={size} {...rest}>{children}</Styled.CustomLabel>
  );
};

export default Label;
