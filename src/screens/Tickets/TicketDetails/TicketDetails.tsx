import { NativeStackScreenProps } from '@react-navigation/native-stack';
import dayjs from 'dayjs';
import { RootNavigationParamList } from '@/../App';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { ToggleButton } from '@/components/ToggleButton';
import { useFetchTickets } from '@/hooks/useFetchTickets';
import { useLocalNavigation } from '@/hooks/useLocalNavigation';
import { EPriceTableToLabel, EVehicleTypeToLabel } from '@/types/tickets';
import { capitalize } from '@/utils';
import * as Styled from './styles';

function TicketDetails({ route }: NativeStackScreenProps<RootNavigationParamList, 'TicketDetails'>) {
  const { params: { ticket } } = route;
  const { plate, vehicleType, priceTable, checkin, checkout } = ticket;

  const { updateTicket, isLoading } = useFetchTickets();
  const { navigate } = useLocalNavigation();

  async function handleRegisterCheckout() {
    const updatedTicket = await updateTicket({ status: 'closed' }, ticket.id);

    if (updatedTicket) {
      navigate('TicketResume', { ticket: updatedTicket });
    }
  }

  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.InputContainer>
          <Styled.Label size="sm">Tipo de veículo: </Styled.Label>
          <Styled.ButtonsContainer>
            <ToggleButton active>{capitalize(EVehicleTypeToLabel[vehicleType])}</ToggleButton>
          </Styled.ButtonsContainer>
        </Styled.InputContainer>

        <Styled.InputContainer>
          <Styled.Label size="sm">Placa: </Styled.Label>
          <Input value={plate} readOnly />
        </Styled.InputContainer>

        <Styled.InputContainer>
          <Styled.Label size="sm">Tabela de preço: </Styled.Label>
          <Styled.ButtonsContainer>
            <ToggleButton active>{capitalize(EPriceTableToLabel[priceTable])}</ToggleButton>
          </Styled.ButtonsContainer>
        </Styled.InputContainer>


        <Styled.HoursContainer>
          <Styled.Hour>
            <Styled.Label size="sm">Hora de entrada: </Styled.Label>
            <Input placeholder="--:--" value={checkin ? dayjs(checkin).format('HH:mm') : undefined} readOnly />
          </Styled.Hour>

          <Styled.Hour>
            <Styled.Label size="sm">Hora de saída: </Styled.Label>
            <Input placeholder="--:--" value={checkout ? dayjs(checkout).format('HH:mm') : undefined} readOnly />
          </Styled.Hour>
        </Styled.HoursContainer>
      </Styled.Container>

      <Button isLoading={isLoading} fullWidth onPress={handleRegisterCheckout}>
        Registrar saída
      </Button>

    </Styled.Wrapper>
  );
}

export default TicketDetails;
