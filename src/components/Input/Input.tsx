import { colors } from '@/theme/colors';
import * as Styled from './styles';
import { InputProps } from './types';

const Input = (props: InputProps) => {
  return <Styled.CustomInput placeholderTextColor={colors.grayDark} {...props} />;
};

export default Input;
