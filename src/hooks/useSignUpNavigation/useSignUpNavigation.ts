import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SignUpStackParamList } from '@/navigation/SignUpNavigator/types';

function useSignUpNavigation<T extends keyof SignUpStackParamList>() {
  return useNavigation<NativeStackNavigationProp<SignUpStackParamList, T>>();
}

export default useSignUpNavigation;
