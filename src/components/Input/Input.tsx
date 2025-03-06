import {InputProps} from './types';
import * as Styled from './styles';

const Input = (props: InputProps) => {
  return <Styled.CustomInput {...props} />;
};

export default Input;
