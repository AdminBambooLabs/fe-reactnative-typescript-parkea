import {Text} from 'react-native';
import {ButtonProps} from './types';
import * as Styled from './styles';

const Button = ({children}: ButtonProps) => {
  return (
    <Styled.Button>
      <Text>{children}</Text>
    </Styled.Button>
  );
};

export default Button;
