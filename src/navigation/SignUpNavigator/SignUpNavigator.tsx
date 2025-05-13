import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HeaderTitle } from '@/components/Header/HeaderTitle';
import { SignUpProvider } from '@/context/SignUpContext';
import { EditPriceTable } from '@/screens/SignUp/EditPriceTable';
import { LoginInformation } from '@/screens/SignUp/LoginInformation';
import { ParkingBusinessHours } from '@/screens/SignUp/ParkingBusinessHours';
import { ParkingInformations } from '@/screens/SignUp/ParkingInformations';
import { PriceTables } from '@/screens/SignUp/PriceTables';
import { RegisterCode } from '@/screens/SignUp/RegisterCode';
import { colors } from '@/theme/colors';
import { SignUpStackParamList } from './types';

const Stack = createNativeStackNavigator<SignUpStackParamList>();

function SignUpStack() {
    return (
        <SignUpProvider>
            <Stack.Navigator
                initialRouteName="LoginInformation"
                screenOptions={{
                    contentStyle: {
                        backgroundColor: colors.white,
                    },
                    headerShadowVisible: false,
                    // eslint-disable-next-line react/no-unstable-nested-components
                    headerTitle: ({ children }) => (
                        <HeaderTitle>{children}</HeaderTitle>
                    ),
                    headerTitleAlign: 'center',
                }}
            >
                <Stack.Screen
                    name="LoginInformation"
                    component={LoginInformation}
                    options={{ title: 'Informações de login' }}
                />
                <Stack.Screen
                    name="RegisterCode"
                    component={RegisterCode}
                    options={{ title: 'Registro' }}
                />
                <Stack.Screen
                    name="ParkingInformations"
                    component={ParkingInformations}
                    options={{ title: 'Informações de cadastro' }}
                />
                <Stack.Screen
                    name="ParkingBusinessHours"
                    component={ParkingBusinessHours}
                    options={{ title: 'Informações de cadastro' }}
                />
                <Stack.Screen
                    name="PriceTables"
                    component={PriceTables}
                    options={{ title: 'Informações de cadastro' }}
                />

                <Stack.Screen
                    name="EditPriceTables"
                    component={EditPriceTable}
                    options={{ title: 'Edição de tabela' }}
                />
            </Stack.Navigator>
        </SignUpProvider>
    );
}

export default SignUpStack;
