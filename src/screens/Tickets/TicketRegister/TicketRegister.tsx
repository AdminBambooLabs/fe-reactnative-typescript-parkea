import { useMemo, useState } from 'react';
import { Alert } from 'react-native';
import { BigLoading } from '@/components/BigLoading';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { ToggleButton } from '@/components/ToggleButton';
import { printDescriptions, printTitles } from '@/constants/messages';
import { useAppContext } from '@/context/AppContext';
import { useParkingResumeContext } from '@/context/ParkingResumeContext/ParkingResumeContext';
import { useFetchTickets } from '@/hooks/useFetchTickets';
import { useLocalNavigation } from '@/hooks/useLocalNavigation';
import { usePrint } from '@/hooks/usePrint';
import { useSmartLoading } from '@/hooks/useSmartLoading';
import { EPriceTable, EVehicleType, TPriceTables, TVehicleTypes } from '@/types/tickets';
import * as Styled from './styles';

const MIN_TIME = 4000;

function TicketRegister() {
  const [plate, setPlate] = useState('');
  const [vehicleType, setVehicleType] = useState<TVehicleTypes | undefined>();
  const [priceTable, setPriceTable] = useState<TPriceTables | undefined>();
  const [showBigLoading, setShowBigLoading] = useState(false);
  const [printMessages, setPrintMessages] = useState(printTitles);

  const { createTicket, isLoading } = useFetchTickets();
  const { reset } = useLocalNavigation();
  const { pushToastToQueue } = useParkingResumeContext();
  const { setShowTabBar } = useAppContext();
  const { runWithMinimumLoading } = useSmartLoading();
  const { printCheckinTicket, btIsReadyToPrint } = usePrint();

  const SHIFT_TIME = useMemo(() => MIN_TIME / printMessages.length, [printMessages]);

  async function checkBTState() {
    const isBTReady = await btIsReadyToPrint();

    if (!isBTReady) {
      Alert.alert(
        'Bluetooth',
        'Para realizar a impressão do ticket o bluetooth deve estar ligado e com as permissões liberadas. Deseja realizar o registro do ticket sem a impressão?',
        [
          {
            text: 'Sim', onPress: () => {
              setPrintMessages([printTitles[0]]);
              handleRegisterTicket();
            },
          },
          { text: 'Não' },
        ]
      );
    }
  }

  async function handleRegisterTicket() {
    try {
      if (plate && vehicleType && priceTable) {
        setShowTabBar(false);
        setShowBigLoading(true);

        const createdTicket = await runWithMinimumLoading(
          createTicket({ plate, vehicleType, priceTable }),
          MIN_TIME,
        );

        if (!createdTicket) { throw new Error('Não foi possível registrar o ticket'); }

        if (createdTicket) {
          const { data } = createdTicket;
          await printCheckinTicket({ plate: data.plate, checkin: data.checkin });

          setPlate('');
          setVehicleType(undefined);
          setPriceTable(undefined);

          pushToastToQueue({ title: 'Registro realizado com sucesso', type: 'success' });
          setShowTabBar(true);
          setShowBigLoading(false);
          reset({
            index: 0,
            routes: [{ name: 'BottomTabs', params: { screen: 'Parking Resume' } }],
          });
        }
      }
    } catch (err) {
      const errString = String(err).replace('Error: ', '');
      pushToastToQueue({ title: errString, type: 'error' });
      setShowTabBar(true);
      setShowBigLoading(false);
      reset({
        index: 0,
        routes: [{ name: 'BottomTabs', params: { screen: 'Parking Resume' } }],
      });
    }
  }

  if (showBigLoading) { return <BigLoading titles={printTitles} descriptions={printDescriptions} shiftTime={SHIFT_TIME} />; }

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

      <Button isLoading={isLoading} disabled={!plate || !vehicleType || !priceTable} fullWidth onPress={checkBTState}>
        Registrar
      </Button>
    </Styled.Wrapper>
  );
}

export default TicketRegister;
