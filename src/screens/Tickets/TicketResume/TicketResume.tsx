import { NativeStackScreenProps } from '@react-navigation/native-stack';
import dayjs from 'dayjs';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { RootNavigationParamList } from '@/../App';
import { ToggleButton } from '@/components/ToggleButton';
import * as Styled from './styles';
import { EPaymentType, EPaymentTypeToLabel, ETicketStatus, TPaymentTypes } from '@/types/tickets';
import { capitalize } from '@/utils';
import { useFetchTickets } from '@/hooks/useFetchTickets';
import { useState } from 'react';
import { useLocalNavigation } from '@/hooks/useLocalNavigation';
import { formatCurrencyBRL, formatCurrencyToNumber } from '@/utils/currency';
import { InputMask } from '@/components/InputMask';
import { BigLoading } from '@/components/BigLoading';
import { useSmartLoading } from '@/hooks/useSmartLoading';
import { useParkingResumeContext } from '@/context/ParkingResumeContext/ParkingResumeContext';
import { printDescriptions, printTitles } from '@/constants/messages';
import { usePrint } from '@/hooks/usePrint';

const MIN_TIME = 4000;
const SHIFT_TIME = MIN_TIME / printTitles.length;

function TicketResume({ route }: NativeStackScreenProps<RootNavigationParamList, 'TicketResume'>) {
  const { params: { ticket } } = route;
  const { checkin, checkout } = ticket;

  const [showBigLoading, setShowBigLoading] = useState(false);
  const [paymentType, setPaymentType] = useState<TPaymentTypes | undefined>();
  const [discount, setDiscount] = useState('');

  const { printCheckoutTicket } = usePrint();
  const { updateTicket, isLoading } = useFetchTickets();
  const { reset } = useLocalNavigation();
  const { runWithMinimumLoading } = useSmartLoading();
  const { pushToastToQueue } = useParkingResumeContext();

  async function handleConfirmCheckout() {
    try {
      setShowBigLoading(true);

      const discountNumber = formatCurrencyToNumber(discount);
      const updatedTicket = await runWithMinimumLoading(
        updateTicket({
          status: ETicketStatus.finished,
          paymentType,
          ...(discount && discountNumber ? { discount: discountNumber } : {}),
        }, ticket.id),
        MIN_TIME
      );

      if (!updatedTicket) throw new Error('Não foi possível realizar o registro')

      if (updatedTicket) {
        await printCheckoutTicket({
          plate: updatedTicket.plate,
          checkin: updatedTicket.checkin,
          checkout: updatedTicket.checkout,
          paymentType: updatedTicket.paymentType,
        });

        pushToastToQueue({ title: 'Saída registrada com sucesso!', type: 'success' })
      }
    } catch (err) {
      const errString = String(err).replace("Error: ", "");
      pushToastToQueue({ title: errString, type: 'error' })
    } finally {
      setShowBigLoading(false);
      reset({
        index: 0,
        routes: [{ name: 'BottomTabs', params: { screen: 'Parking Resume' } }],
      });
    }
  }

  if (showBigLoading) return <BigLoading titles={printTitles} descriptions={printDescriptions} shiftTime={SHIFT_TIME} />;

  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.HoursContainer>
          <Styled.Hour>
            <Styled.Label size="sm">Hora de entrada: </Styled.Label>
            <Input placeholder='--:--' value={checkin ? dayjs(checkin).format('HH:mm') : undefined} readOnly />
          </Styled.Hour>
          <Styled.Hour>
            <Styled.Label size="sm">Hora de saída: </Styled.Label>
            <Input placeholder='--:--' value={checkout ? dayjs(checkout).format('HH:mm') : undefined} readOnly />
          </Styled.Hour>
        </Styled.HoursContainer>

        <Styled.InputContainer>
          <Styled.Label size="sm">Forma de pagamento: </Styled.Label>
          <Styled.ButtonsContainer>
            <ToggleButton
              onPress={() => setPaymentType(EPaymentType.pix)}
              active={paymentType === EPaymentType.pix}>
              {capitalize(EPaymentTypeToLabel[EPaymentType.pix])}
            </ToggleButton>
            <ToggleButton
              onPress={() => setPaymentType(EPaymentType.cash)}
              active={paymentType === EPaymentType.cash}>
              {capitalize(EPaymentTypeToLabel[EPaymentType.cash])}
            </ToggleButton>
            <ToggleButton
              onPress={() => setPaymentType(EPaymentType.card)}
              active={paymentType === EPaymentType.card}>
              {capitalize(EPaymentTypeToLabel[EPaymentType.card])}
            </ToggleButton>
          </Styled.ButtonsContainer>
        </Styled.InputContainer>

        <Styled.HoursContainer>
          <Styled.Hour>
            <Styled.Label size="sm">Valor: </Styled.Label>
            <Input placeholder='R$ 0,00' value={formatCurrencyBRL(ticket.total || 0)} readOnly />
          </Styled.Hour>

          <Styled.Hour>
            <Styled.Label size="sm">Desconto: </Styled.Label>
            <InputMask
              keyboardType='numeric'
              placeholder='R$ 0,00'
              value={discount}
              onChangeText={(value) => {
                setDiscount(value)
              }}
              mask="R$ 999,99"
            />
          </Styled.Hour>
        </Styled.HoursContainer>

        <Styled.TotalText>
          Total: {formatCurrencyBRL(ticket.total && ticket.discount ? ticket.total - ticket.discount : 0)}
        </Styled.TotalText>
      </Styled.Container>

      <Button disabled={!paymentType} isLoading={isLoading} fullWidth onPress={handleConfirmCheckout}>
        Confirmar
      </Button>
    </Styled.Wrapper>
  );
}

export default TicketResume;
