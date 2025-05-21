import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import { HeaderTitle } from '@/components/Header/HeaderTitle';
import { ParkingResumeHeader } from '@/components/Header/ParkingResumeHeader';
import { TabBar } from '@/components/TabBar';
import { Cashier } from '@/screens/Cashier';
import { ParkingResume } from '@/screens/ParkingResume';
import { TicketRegister } from '@/screens/Tickets/TicketRegister';

import { colors } from '@/theme/colors';

export type BottomTabParamList = {
    ParkingResume: undefined;
    TicketRegister: undefined;
    Cashier: undefined;
};

const BottomNavigator = createBottomTabNavigator<BottomTabParamList>({
    tabBar: (props) => <TabBar {...props} />,
    screenOptions: {
        sceneStyle: { backgroundColor: colors.white },
        headerTitleAlign: 'center',
        headerShadowVisible: false,
        headerTitle: ({ children }) => (
            <HeaderTitle>{children}</HeaderTitle>
        ),
    },
    screens: {
        ParkingResume: {
            screen: ParkingResume,
            options: {
                title: 'Pátio',
                header: (props) => <ParkingResumeHeader {...props} />,
            },
        },
        TicketRegister: {
            screen: TicketRegister,
            options: {
                title: 'Registrar',
                headerTitle: () => (
                    <HeaderTitle>Registrar Entrada</HeaderTitle>
                ),
            },
        },
        Cashier: {
            screen: Cashier,
            options: {
                title: 'Caixa',
            },
        },
    },
});

export default BottomNavigator;
