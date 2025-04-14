import { CreateCheckinTicketPrintPayloadParams, CreateCheckoutTicketPrintPayloadParams } from '@/utils/print';
import { IUsePrint } from "./types";
import { PrintService } from "@/services/printService";

function usePrint() {
    async function printCheckinTicket(params: CreateCheckinTicketPrintPayloadParams) {
        try {
            await PrintService.printCheckinTicket(params);
        } catch (err) {
            throw new Error("Não foi possível imprimir o ticket")
        }
    };

    async function printCheckoutTicket(params: CreateCheckoutTicketPrintPayloadParams) {
        try {
            await PrintService.printCheckoutTicket(params);
        } catch (err) {
            throw new Error("Não foi possível imprimir o ticket")
        }
    };

    return {
        printCheckinTicket,
        printCheckoutTicket
    };
};

export default usePrint;
