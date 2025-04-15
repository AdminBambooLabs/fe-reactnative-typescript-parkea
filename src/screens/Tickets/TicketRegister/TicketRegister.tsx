import { useState } from 'react';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { useFetchTickets } from '@/hooks/useFetchTickets';
import * as Styled from './styles';
import { ToggleButton } from '@/components/ToggleButton';
import { EPriceTable, EVehicleType, TPriceTables, TVehicleTypes } from '@/types/tickets';
import { useLocalNavigation } from '@/hooks/useLocalNavigation';
import { BigLoading } from '@/components/BigLoading';
import { printDescriptions, printTitles } from '@/constants/messages';
import { useParkingResumeContext } from '@/context/ParkingResumeContext/ParkingResumeContext';
import { useAppContext } from '@/context/AppContext';
import { useSmartLoading } from '@/hooks/useSmartLoading';
import { usePrint } from '@/hooks/usePrint';

const MIN_TIME = 4000;
const SHIFT_TIME = MIN_TIME / printTitles.length;

function TicketRegister() {
  const [plate, setPlate] = useState('');
  const [vehicleType, setVehicleType] = useState<TVehicleTypes | undefined>();
  const [priceTable, setPriceTable] = useState<TPriceTables | undefined>();
  const [showBigLoading, setShowBigLoading] = useState(false);

  const { createTicket, isLoading } = useFetchTickets();
  const { reset } = useLocalNavigation();
  const { pushToastToQueue } = useParkingResumeContext();
  const { setShowTabBar } = useAppContext();
  const { runWithMinimumLoading } = useSmartLoading();
  const { printCheckinTicket } = usePrint();

  async function handleRegisterTicket() {
    try {
      if (plate && vehicleType && priceTable) {
        setShowTabBar(false);
        setShowBigLoading(true);

        const createdTicket = await runWithMinimumLoading(
          createTicket({ plate, vehicleType, priceTable }),
          MIN_TIME
        )

        if (!createdTicket) throw new Error('Não foi possível registrar o ticket');

        if (createdTicket) {
          const { data } = createdTicket;
          await printCheckinTicket({ plate: data.plate, checkin: data.checkin })

          setPlate('')
          setVehicleType(undefined)
          setPriceTable(undefined)
          pushToastToQueue({ title: 'Registro realizado com sucesso', type: 'success' })
        }
      };
    } catch (err) {
      const errString = String(err).replace("Error: ", "");
      pushToastToQueue({ title: errString, type: 'error' })
    } finally {
      setShowTabBar(true)
      setShowBigLoading(false)
      reset({
        index: 0,
        routes: [{ name: 'BottomTabs', params: { screen: 'Parking Resume' } }],
      })
    }
  }

  if (showBigLoading) return <BigLoading titles={printTitles} descriptions={printDescriptions} shiftTime={SHIFT_TIME} />;

  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.InputContainer>
          <Styled.Label size="sm">Tipo de veículo: </Styled.Label>
          <Styled.ButtonsContainer>
            <ToggleButton onPress={() => setVehicleType(EVehicleType.car)} active={vehicleType === EVehicleType.car}>Carro</ToggleButton>
            <ToggleButton onPress={() => setVehicleType(EVehicleType.motorcycle)} active={vehicleType === EVehicleType.motorcycle}>Moto</ToggleButton>
            <ToggleButton onPress={() => setVehicleType(EVehicleType.transport)} active={vehicleType === EVehicleType.transport}>Transporte</ToggleButton>
          </Styled.ButtonsContainer>
        </Styled.InputContainer>
        <Styled.InputContainer>
          <Styled.Label size="sm">Placa: </Styled.Label>
          <Input value={plate} onChangeText={value => setPlate(value)} />
        </Styled.InputContainer>
        <Styled.InputContainer>
          <Styled.Label size="sm">Tabela de preço: </Styled.Label>
          <Styled.ButtonsContainer>
            <ToggleButton onPress={() => setPriceTable(EPriceTable.hourly)} active={priceTable === EPriceTable.hourly}>Horista</ToggleButton>
            <ToggleButton onPress={() => setPriceTable(EPriceTable.diarist)} active={priceTable === EPriceTable.diarist}>Diarista</ToggleButton>
            <ToggleButton onPress={() => setPriceTable(EPriceTable.monthly)} active={priceTable === EPriceTable.monthly}>Mensalista</ToggleButton>
          </Styled.ButtonsContainer>
        </Styled.InputContainer>
      </Styled.Container>

      <Button isLoading={isLoading} disabled={!plate || !vehicleType || !priceTable} fullWidth onPress={handleRegisterTicket}>
        Registrar
      </Button>
    </Styled.Wrapper>
  );
}

export default TicketRegister;
