import { PermissionsAndroid, Platform } from 'react-native';
import { BleManager, State } from 'react-native-ble-plx';

const unableToPrintStatus: (keyof typeof State)[] = [
  State.PoweredOff,
  State.Resetting,
  State.Unsupported,
  State.Unauthorized,
];

export async function requestBluetoothPermissions() {
  if (Platform.OS === 'android') {
    const apiLevel = Platform.Version;

    if (apiLevel >= 31) {
      // Android 12+
      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
        PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
      ]);

      return (
        granted[PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT] === PermissionsAndroid.RESULTS.GRANTED &&
        granted[PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN] === PermissionsAndroid.RESULTS.GRANTED
      );
    } else {
      // Android 6–11
      const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);

      return granted === PermissionsAndroid.RESULTS.GRANTED;
    }
  }

  // No iOS ou outras plataformas
  return true;
}

export function createBluetoothStateListener(listener: (state: State) => void) {
  const bleManager = new BleManager();

  return bleManager.onStateChange(listener, true);
}

export function isBluetoothReadyToPrint(state: keyof typeof State) {
  const status = unableToPrintStatus.includes(state);
  return !status;
}
