import * as Styled from './styles';
import {Input} from '../../../components/Input';
import {useState} from 'react';
import {Text} from 'react-native';
import {Button} from '../../../components/Button';

function RegisterTicket() {
  const [plate, setPlate] = useState('');

  return (
    <Styled.Wrapper>
      <Styled.InputContainer>
        <Text>Placa: </Text>
        <Input value={plate} onChangeText={value => setPlate(value)} />
      </Styled.InputContainer>

      <Button fullWidth>Registrar</Button>
    </Styled.Wrapper>
  );
}

export default RegisterTicket;
