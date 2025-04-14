import dayjs from "dayjs";
import { ITicket } from "@/types/tickets";
import { formatCurrencyBRL } from "./currency";

export type CreateCheckinTicketPrintPayloadParams = Partial<Pick<ITicket, "plate" | "checkin">>;
export type CreateCheckoutTicketPrintPayloadParams = Partial<Pick<ITicket, "plate" | "checkin" | "checkout" | "paymentType" | "total" | "discount">>;

export function createCheckinTicketPrintPayload({ plate, checkin }: CreateCheckinTicketPrintPayloadParams) {
    return "[C]<font size='normal'>{Nome do Estacionamento}</font>\n" +
        '[C]===============\n' +
        "[C]<font size='normal' color='bg-black'>Registro de Entrada</font>\n" +
        '[C]===============\n' +
        `[C]<font size='normal'>${plate}</font>\n` +
        `[C]<font size='normal'>Entrada: ${dayjs(checkin).format('DD/MM/YYYY [às] HH:mm')}</font>\n`
}

export function createCheckoutTicketPrintPayload({ plate, checkin, checkout, paymentType = "card", total = 0, discount = 0 }: CreateCheckoutTicketPrintPayloadParams) {
    return "[C]<font size='normal'>{Nome do Estacionamento}</font>\n" +
        '[C]===============\n' +
        "[C]<font size='normal' color='bg-black'>Registro de Saída</font>\n" +
        '[C]===============\n' +
        `[C]<font size='normal'>${plate}</font>\n` +
        `[C]<font size='normal'>Entrada: ${dayjs(checkin).format('DD/MM/YYYY [às] HH:mm')}</font>\n` +
        `[C]<font size='normal'>Entrada: ${dayjs(checkout).format('DD/MM/YYYY [às] HH:mm')}</font>\n` +
        '[C]===============\n' +
        `[L]<font size='normal'>Forma de pagaemnto: ${paymentType}</font>\n` +
        `[L]<font size='normal'>Valor: R$ ${formatCurrencyBRL(total!)}</font>\n` +
        `[L]<font size='normal'>Desconto: R$ ${formatCurrencyBRL(discount!)}</font>\n` +
        `[L]<font size='normal'>Total: ${formatCurrencyBRL(total! - discount!)}</font>\n`
}
