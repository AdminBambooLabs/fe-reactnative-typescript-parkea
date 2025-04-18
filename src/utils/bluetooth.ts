import { PermissionsAndroid } from 'react-native';
import { BleManager, State } from 'react-native-ble-plx';

const unableToPrintStatus: (keyof typeof State)[] = [
  State.PoweredOff,
  State.Resetting,
  State.Unsupported,
  State.Unauthorized,
];

export async function requestBluetoothPermission() {
  const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT);

  return granted === PermissionsAndroid.RESULTS.GRANTED;
}

export function createBluetoothStateListener(listener: (state: State) => void) {
  const bleManager = new BleManager();

  return bleManager.onStateChange(listener, true);
}

export function isBluetoothReadyToPrint(state: keyof typeof State) {
  const status = unableToPrintStatus.includes(state);
  console.log('[status', status);
  return !status;
}
