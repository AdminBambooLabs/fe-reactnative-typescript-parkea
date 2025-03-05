import {Text, TouchableOpacity} from 'react-native';
import {ButtonProps} from './types';

const Button = ({children}: ButtonProps) => {
  return (
    <TouchableOpacity>
      <Text>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
