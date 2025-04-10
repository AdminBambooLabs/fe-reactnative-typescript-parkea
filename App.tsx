import React from 'react';
import { Text, SafeAreaView, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStaticNavigation, NavigatorScreenParams } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeProvider } from 'styled-components/native';

import { ParkingResume } from '@/screens/ParkingResume';
import { RegisterTicket } from '@/screens/Tickets/RegisterTicket';
import { TicketDetails, TicketDetailsDeleteButton } from '@/screens/Tickets/TicketDetails';
import { TicketResume } from '@/screens/Tickets/TicketResume';

import { theme } from '@/theme';
import { ITicket } from '@/types/tickets';
import { colors } from '@/theme/colors';
import { TabBar } from '@/components/TabBar';
import { Cashier } from '@/screens/Cashier';
import { ParkingResumeHeader } from '@/components/Header/ParkingResumeHeader';
import { HeaderTitle } from '@/components/Header/HeaderTitle';
import { ConfirmationRouteProps } from '@/screens/Confirmation/types';
import { Confirmation } from '@/screens/Confirmation';

export type NaviteStackParamList = {
  BottomTabs: NavigatorScreenParams<BottomTabParamList>;
  TicketDetails: { ticket: ITicket };
  TicketResume: { ticket: ITicket };
  Confirmation: ConfirmationRouteProps;
};

export type BottomTabParamList = {
  ParkingResume: undefined;
  RegisterTicket: undefined;
  Cashier: undefined;
};

export type RootNavigationParamList = NaviteStackParamList & BottomTabParamList;

const BottomTabs = createBottomTabNavigator<BottomTabParamList>({
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
        header: (props) => <ParkingResumeHeader {...props} />
      },
    },
    RegisterTicket: {
      screen: RegisterTicket,
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

const RootStack = createNativeStackNavigator<NaviteStackParamList>({
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
    BottomTabs: {
      screen: BottomTabs,
      options: {
        headerShown: false,
      },
    },
    TicketDetails: {
      screen: TicketDetails,
      options: {
        title: 'Detalhe do veículo',
        headerRight: () => <TicketDetailsDeleteButton />
      }
    },
    TicketResume: {
      screen: TicketResume,
      options: {
        title: 'Resumo de saída',
      }
    },
    Confirmation: {
      screen: Confirmation,
      options: {
        headerShown: false,
      },
    }
  },
});

const Navigation = createStaticNavigation(RootStack);

function App(): React.JSX.Element {
  return <ThemeProvider theme={theme}><SafeAreaView style={{ flex: 1 }}><Navigation /></SafeAreaView></ThemeProvider>;
}

export default App;
