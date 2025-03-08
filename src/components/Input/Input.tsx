import * as Styled from './styles';
import { InputProps } from './types';

const Input = (props: InputProps) => {
  return <Styled.CustomInput {...props} />;
};

export default Input;
