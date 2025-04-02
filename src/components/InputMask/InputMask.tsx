import * as Styled from './styles';
import { InputMaskProps } from './types';

const InputMask = (props: InputMaskProps) => {
  return <Styled.CustomInput {...props} />;
};

export default InputMask;
