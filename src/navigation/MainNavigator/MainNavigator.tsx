import { createStaticNavigation, NavigatorScreenParams } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { BottomNavigator, BottomTabParamList } from '../BottomNavigator';
import { HeaderTitle } from '@/components/Header/HeaderTitle';
import { SignUpStack } from '@/navigation/SignUpNavigator';
import { Confirmation, ConfirmationRouteProps } from '@/screens/Confirmation';
import { Login } from '@/screens/Login';
import { LoginOrSignup } from '@/screens/LoginOrSignup';
import { TicketDetails, TicketDetailsDeleteButton } from '@/screens/Tickets/TicketDetails';
import { TicketResume } from '@/screens/Tickets/TicketResume';

import { colors } from '@/theme/colors';
import { ITicket } from '@/types/tickets';

export type NaviteStackParamList = {
    BottomTabs: NavigatorScreenParams<BottomTabParamList>;
    TicketDetails: { ticket: ITicket };
    TicketResume: { ticket: ITicket };
    Confirmation: ConfirmationRouteProps;
    LoginOrSignup: undefined;
    Login: undefined;
    SignUp: undefined;
};

export type RootNavigationParamList = NaviteStackParamList & BottomTabParamList;

const RootStack = createNativeStackNavigator<NaviteStackParamList>({
    initialRouteName: 'Login',
    screenOptions: {
        contentStyle: {
            backgroundColor: colors.white,
        },
        headerShadowVisible: false,
        headerTitle: ({ children }) => (
            <HeaderTitle>{children}</HeaderTitle>
        ),
    },
    screens: {
        LoginOrSignup: {
            screen: LoginOrSignup,
            options: {
                headerShown: false,
            },
        },
        SignUp: {
            screen: SignUpStack,
            options: {
                headerShown: false,
            },
        },
        Login: {
            screen: Login,
            options: {
                headerShown: false,
            },
        },
        BottomTabs: {
            screen: BottomNavigator,
            options: {
                headerShown: false,
            },
        },
        TicketDetails: {
            screen: TicketDetails,
            options: {
                title: 'Detalhe do veículo',
                headerRight: () => <TicketDetailsDeleteButton />,
            },
        },
        TicketResume: {
            screen: TicketResume,
            options: {
                title: 'Resumo de saída',
            },
        },
        Confirmation: {
            screen: Confirmation,
            options: {
                headerShown: false,
            },
        },
    },
});

const MainNavigator = createStaticNavigation(RootStack);

export default MainNavigator;
