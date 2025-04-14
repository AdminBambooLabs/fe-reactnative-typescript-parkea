import { CreateCheckinTicketPrintPayloadParams, CreateCheckoutTicketPrintPayloadParams } from '@/utils/print';
import { IUsePrint } from "./types";
import { PrintService } from "@/services/printService";

function usePrint() {
    async function printCheckinTicket(params: CreateCheckinTicketPrintPayloadParams) {
        try {
            await PrintService.printCheckinTicket(params);
        } catch (err) {
            throw new Error(JSON.stringify(err))
        }
    };

    async function printCheckoutTicket(params: CreateCheckoutTicketPrintPayloadParams) {
        try {
            await PrintService.printCheckoutTicket(params);
        } catch (err) {
            throw new Error(JSON.stringify(err))
        }
    };

    return {
        printCheckinTicket,
        printCheckoutTicket
    };
};

export default usePrint;
