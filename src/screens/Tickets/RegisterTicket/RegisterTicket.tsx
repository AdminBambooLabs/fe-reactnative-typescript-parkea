import { useState } from 'react';
import { Text } from 'react-native';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { useFetchTickets } from '@/hooks/useFetchTickets';
import * as Styled from './styles';
import { ToggleButton } from '@/components/ToggleButton';
import { EPriceTable, EVehicleType, TPriceTables, TVehicleTypes } from '@/types/tickets';

function RegisterTicket() {
  const [plate, setPlate] = useState('');
  const [vehicleType, setVehicleType] = useState<TVehicleTypes | undefined>();
  const [priceTable, setPriceTable] = useState<TPriceTables | undefined>();

  const { createTicket } = useFetchTickets();

  async function handleCreateTicket() {
    if (!plate) return
    if (plate && vehicleType && priceTable) await createTicket({ plate, vehicleType, priceTable });
  }

  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.InputContainer>
          <Styled.Label>Tipo de veículo: </Styled.Label>
          <Styled.ButtonsContainer>
            <ToggleButton onPress={() => setVehicleType(EVehicleType.car)} active={vehicleType === EVehicleType.car}>Carro</ToggleButton>
            <ToggleButton onPress={() => setVehicleType(EVehicleType.motorcycle)} active={vehicleType === EVehicleType.motorcycle}>Moto</ToggleButton>
            <ToggleButton onPress={() => setVehicleType(EVehicleType.transport)} active={vehicleType === EVehicleType.transport}>Transporte</ToggleButton>
          </Styled.ButtonsContainer>
        </Styled.InputContainer>
        <Styled.InputContainer>
          <Styled.Label>Placa: </Styled.Label>
          <Input value={plate} onChangeText={value => setPlate(value)} />
        </Styled.InputContainer>
        <Styled.InputContainer>
          <Styled.Label>Tabela de preço: </Styled.Label>
          <Styled.ButtonsContainer>
            <ToggleButton onPress={() => setPriceTable(EPriceTable.hourly)} active={priceTable === EPriceTable.hourly}>Horista</ToggleButton>
            <ToggleButton onPress={() => setPriceTable(EPriceTable.diarist)} active={priceTable === EPriceTable.diarist}>Diarista</ToggleButton>
            <ToggleButton onPress={() => setPriceTable(EPriceTable.monthly)} active={priceTable === EPriceTable.monthly}>Mensalista</ToggleButton>
          </Styled.ButtonsContainer>
        </Styled.InputContainer>
      </Styled.Container>

      <Button fullWidth onPress={handleCreateTicket}>
        Registrar
      </Button>
    </Styled.Wrapper>
  );
}

export default RegisterTicket;
