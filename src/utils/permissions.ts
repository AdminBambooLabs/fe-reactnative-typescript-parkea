import { PermissionsAndroid } from 'react-native';

export async function requestBluetoothPermission() {
    const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
    );
    return granted === PermissionsAndroid.RESULTS.GRANTED;
}
