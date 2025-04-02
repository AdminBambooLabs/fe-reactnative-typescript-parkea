import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { RootNavigationParamList } from '@/../App';
import { ToggleButton } from '@/components/ToggleButton';
import * as Styled from './styles';
import { EPaymentType, EPaymentTypeToLabel, TPaymentTypes } from '@/types/tickets';
import { capitalize } from '@/utils';
import dayjs from 'dayjs';
import { useFetchTickets } from '@/hooks/useFetchTickets';
import { useState } from 'react';
import { useLocalNavigation } from '@/hooks/useFetchTickets/useLocalNavigation';
import { formatCurrencyBRL, formatCurrencyToNumber } from '@/utils/currency';
import { InputMask } from '@/components/InputMask';

function TicketResume({ route }: NativeStackScreenProps<RootNavigationParamList, 'TicketResume'>) {
  const { params: { ticket } } = route;
  const { checkin, checkout } = ticket;

  const [paymentType, setPaymentType] = useState<TPaymentTypes | undefined>()
  const [discount, setDiscount] = useState('')

  const { updateTicket, isLoading } = useFetchTickets()
  const { navigate } = useLocalNavigation()

  async function handleRegisterPayment() {
    const updatedTicket = await updateTicket({ status: 'paid', paymentType, discount: formatCurrencyToNumber(discount) }, ticket.id)
    if (updatedTicket) {
      navigate('BottomTabs', { screen: 'ParkingResume' });
    }
  }

  return (
    <Styled.Wrapper>
      <Styled.Container>
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

        <Styled.InputContainer>
          <Styled.Label>Forma de pagamento: </Styled.Label>
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
            <Styled.Label>Valor: </Styled.Label>
            <Input placeholder='R$ 0,00' value={formatCurrencyBRL(ticket.total || 0)} readOnly />
          </Styled.Hour>

          <Styled.Hour>
            <Styled.Label>Desconto: </Styled.Label>
            <InputMask
              keyboardType='numeric'
              placeholder='R$ 0,00'
              value={discount}
              onChangeText={(value) => {
                console.log('value', formatCurrencyToNumber(value))
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

      <Button fullWidth onPress={handleRegisterPayment}>
        {isLoading ? 'Carregando...' : 'Confirmar'}
      </Button>
    </Styled.Wrapper>
  );
}

export default TicketResume;
