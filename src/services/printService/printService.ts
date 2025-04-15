import ThermalPrinterModule from 'react-native-thermal-printer';
import {
    createCheckinTicketPrintPayload,
    CreateCheckinTicketPrintPayloadParams,
    createCheckoutTicketPrintPayload,
    CreateCheckoutTicketPrintPayloadParams

} from '@/utils/print';
import { requestBluetoothPermission } from '@/utils/permissions';

class PrinterService {
    private static instance: PrinterService;
    private printer: { macAddress: string } | null = null;

    private constructor() { }

    public static getInstance(): PrinterService {
        if (!PrinterService.instance) {
            PrinterService.instance = new PrinterService();
        }
        return PrinterService.instance;
    }

    async configurePrinter() {
        if (!(await requestBluetoothPermission())) throw new Error("É necessário habilitar a permissão ao bluetooth");

        if (this.printer) return;

        const printers = await ThermalPrinterModule.getBluetoothDeviceList();
        if (!printers.length) throw new Error('Nenhuma impressora encontrada');

        this.printer = printers[0];

        ThermalPrinterModule.defaultConfig = {
            ...ThermalPrinterModule.defaultConfig,
            macAddress: this.printer.macAddress,
        };
    }

    async printCheckinTicket(args: CreateCheckinTicketPrintPayloadParams) {
        await this.configurePrinter();
        const payload = createCheckinTicketPrintPayload(args);

        await ThermalPrinterModule.printBluetooth({ payload });
    }

    async printCheckoutTicket(args: CreateCheckoutTicketPrintPayloadParams) {
        await this.configurePrinter();
        const payload = createCheckoutTicketPrintPayload(args);

        await ThermalPrinterModule.printBluetooth({ payload });
    }
}

export default PrinterService.getInstance();
