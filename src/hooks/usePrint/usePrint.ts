import { useEffect, useState } from 'react';
import { State } from 'react-native-ble-plx';
import { PrintService } from '@/services/printService';
import { createBluetoothStateListener, isBluetoothReadyToPrint, requestBluetoothPermission } from '@/utils/bluetooth';
import { CreateCheckinTicketPrintPayloadParams, CreateCheckoutTicketPrintPayloadParams } from '@/utils/print';

function usePrint() {
  const [btStatus, setBtStatus] = useState<keyof typeof State>('Unknown');

  useEffect(() => {
    const subscription = createBluetoothStateListener(state => setBtStatus(state));

    return () => {
      subscription.remove();
    };
  }, []);

  const btIsReadyToPrint = async () => {
    const btPermission = await requestBluetoothPermission();
    const readyToPrint = isBluetoothReadyToPrint(btStatus);

    return btPermission && readyToPrint;
  };

  async function printCheckinTicket(params: CreateCheckinTicketPrintPayloadParams) {
    try {
      await PrintService.printCheckinTicket(params);
    } catch (err) {
      throw new Error('Não foi possível imprimir o ticket');
    }
  }

  async function printCheckoutTicket(params: CreateCheckoutTicketPrintPayloadParams) {
    try {
      await PrintService.printCheckoutTicket(params);
    } catch (err) {
      throw new Error('Não foi possível imprimir o ticket');
    }
  }

  return {
    btIsReadyToPrint,
    printCheckinTicket,
    printCheckoutTicket,
  };
}

export default usePrint;
