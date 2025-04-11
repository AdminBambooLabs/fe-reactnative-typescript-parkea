import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootNavigationParamList } from "App";

function useLocalNavigation<T extends keyof RootNavigationParamList>() {
    return useNavigation<NativeStackNavigationProp<RootNavigationParamList, T>>()
}

export default useLocalNavigation;
