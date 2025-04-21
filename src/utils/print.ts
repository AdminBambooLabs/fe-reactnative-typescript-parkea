import dayjs from 'dayjs';
import { ITicket } from '@/types/tickets';
import { formatCurrencyBRL } from './currency';
import { capitalize } from './string';

export type CreateCheckinTicketPrintPayloadParams = Partial<Pick<ITicket, 'plate' | 'checkin'>>;
export type CreateCheckoutTicketPrintPayloadParams = Partial<
  Pick<ITicket, 'plate' | 'checkin' | 'checkout' | 'total' | 'discount' | 'paymentType'>
>;

export function createCheckinTicketPrintPayload({ plate, checkin }: CreateCheckinTicketPrintPayloadParams) {
  return (
    '[L]{Nome do Estacionamento}\n' +
    '[L]\n' +
    '[L]Registro de Entrada\n' +
    '[L]\n' +
    `[L]Placa: ${plate}\n` +
    '[L]Entrada:\n' +
    `[L]${dayjs(checkin).format('DD/MM/YYYY [às] HH:mm')}\n`
  );
}

export function createCheckoutTicketPrintPayload({
  plate,
  checkin,
  checkout,
  paymentType = 'pix',
  total = 0,
  discount = 0,
}: CreateCheckoutTicketPrintPayloadParams) {
  return (
    '[L]{Nome do Estacionamento}\n' +
    '[L]\n' +
    '[L]Registro de Saida\n' +
    '[L]\n' +
    `[L]Placa: ${plate}\n` +
    '[L]Entrada:\n' +
    `[L]${dayjs(checkin).format('DD/MM/YYYY [às] HH:mm')}\n` +
    '[L]Saida:\n' +
    `[L]${dayjs(checkout).format('DD/MM/YYYY [às] HH:mm')}\n` +
    '[L]\n' +
    `[L]Forma de pagamento: ${capitalize(paymentType)}\n` +
    `[L]Valor: ${formatCurrencyBRL(total!)}\n` +
    `[L]Desconto: ${formatCurrencyBRL(discount!)}\n` +
    `[L]Total: ${formatCurrencyBRL(total! - discount!)}\n`
  );
}
