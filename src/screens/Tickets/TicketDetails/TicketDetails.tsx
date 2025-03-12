import { Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { RootNavigationParamList } from '@/../App';
import { ToggleButton } from '@/components/ToggleButton';
import * as Styled from './styles';
import { EPriceTableToLabel, EVehicleTypeToLabel } from '@/types/tickets';
import { capitalize } from '@/utils';
import dayjs from 'dayjs';
import { useFetchTickets } from '@/hooks/useFetchTickets';

function TicketDetails({ route }: NativeStackScreenProps<RootNavigationParamList, 'TicketDetails'>) {
  const { params: { ticket } } = route;
  const { plate, vehicleType, priceTable, checkin, checkout } = ticket;
  console.log('[ticket', ticket)

  const { updateTicket, isLoading } = useFetchTickets()

  async function handleRegisterCheckout() {
    return updateTicket({ status: 'closed' }, ticket.id)
  }

  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.InputContainer>
          <Styled.Label>Tipo de veículo: </Styled.Label>
          <Styled.ButtonsContainer>
            <ToggleButton active>{capitalize(EVehicleTypeToLabel[vehicleType])}</ToggleButton>
          </Styled.ButtonsContainer>
        </Styled.InputContainer>

        <Styled.InputContainer>
          <Styled.Label>Placa: </Styled.Label>
          <Input value={plate} readOnly />
        </Styled.InputContainer>

        <Styled.InputContainer>
          <Styled.Label>Tabela de preço: </Styled.Label>
          <Styled.ButtonsContainer>
            <ToggleButton active>{capitalize(EPriceTableToLabel[priceTable])}</ToggleButton>
          </Styled.ButtonsContainer>
        </Styled.InputContainer>


        <Styled.HoursContainer>
          <Styled.Hour>
            <Styled.Label>Hora de entrada: </Styled.Label>
            <Input placeholder='--:--' value={checkin ? dayjs(checkin).format('HH:mm') : undefined} readOnly />
          </Styled.Hour>

          <Styled.Hour>
            <Styled.Label>Hora de saída: </Styled.Label>
            <Input placeholder='--:--' value={checkout ? dayjs(checkout).format('HH:mm') : undefined} readOnly />
          </Styled.Hour>
        </Styled.HoursContainer>
      </Styled.Container>

      <Button fullWidth onPress={handleRegisterCheckout}>
        {isLoading ? 'Carregando...' : 'Registrar saída'}
      </Button>
    </Styled.Wrapper>
  );
}

export default TicketDetails;
