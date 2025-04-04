import dayjs from "dayjs";
import { ITicket } from "@/types/tickets";

export type CreateCheckinTicketPrintPayloadParams = Pick<ITicket, "plate" | "checkin">

export function createCheckinTicketPrintPayload({ plate, checkin }: CreateCheckinTicketPrintPayloadParams) {
    return "[C]<font size='big'>{Nome do Estacionamento}</font>\n" +
        '[L]\n' +
        '[C]===============\n' +
        "[C]<font size='big' color='bg-black'>Registro de Entrada</font>\n" +
        '[L]\n' +
        '[C]===============\n' +
        '[L]\n' +
        `[C]<font size='big'>${plate}</font>\n` +
        '[L]\n' +
        `[C]<font size='normal'>Entrada: ${dayjs(checkin).format('DD/MM/YYYY [às] HH:mm')}</font>\n` +
        '[L]\n'
}
