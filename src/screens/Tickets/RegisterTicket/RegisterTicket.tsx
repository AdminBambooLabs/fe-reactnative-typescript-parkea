import { useState } from 'react';
import { Text } from 'react-native';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { useFetchTickets } from '@/hooks/useFetchTickets';
import * as Styled from './styles';
import { EPriceTable, EVehicleType } from '@/api/services/tickets';

function RegisterTicket() {
  const [plate, setPlate] = useState('');

  const { createTicket } = useFetchTickets();

  async function handleCreateTicket() {
    if (!plate) { return; }
    await createTicket({ plate, vehicleType: EVehicleType.car, priceTable: EPriceTable.hourly });
  }

  return (
    <Styled.Wrapper>
      <Styled.InputContainer>
        <Text>Tipo de veículo: </Text>
      </Styled.InputContainer>
      <Styled.InputContainer>
        <Text>Placa: </Text>
        <Input value={plate} onChangeText={value => setPlate(value)} />
      </Styled.InputContainer>

      <Button fullWidth onPress={handleCreateTicket}>
        Registrar
      </Button>
    </Styled.Wrapper>
  );
}

export default RegisterTicket;
