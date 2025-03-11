import { Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { RootNavigationParamList } from '@/../App';
import { ToggleButton } from '@/components/ToggleButton';
import * as Styled from './styles';
import { EPriceTableToLabel, EVehicleTypeToLabel } from '@/types/tickets';
import { capitalize } from '@/utils';

function TicketDetails({ route }: NativeStackScreenProps<RootNavigationParamList, 'TicketDetails'>) {
  const { params: { ticket } } = route;
  const { plate, vehicleType, priceTable } = ticket;

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
          <Text>Tabela de preço: </Text>
          <Styled.ButtonsContainer>
            <ToggleButton active>{capitalize(EPriceTableToLabel[priceTable])}</ToggleButton>
          </Styled.ButtonsContainer>
        </Styled.InputContainer>
      </Styled.Container>

      <Button fullWidth>
        Registrar saída
      </Button>
    </Styled.Wrapper>
  );
}

export default TicketDetails;
