import React from 'react';
import { SafeAreaView } from 'react-native';
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

export type NaviteStackParamList = {
  BottomTabs: NavigatorScreenParams<BottomTabParamList>;
  TicketDetails: { ticket: ITicket };
  TicketResume: { ticket: ITicket };
};

export type BottomTabParamList = {
  ParkingResume: undefined;
  RegisterTicket: undefined;
};

export type RootNavigationParamList = NaviteStackParamList & BottomTabParamList;

const BottomTabs = createBottomTabNavigator<BottomTabParamList>({
  screens: {
    ParkingResume: {
      screen: ParkingResume,
      options: {
        title: 'Pátio',
      },
    },
    RegisterTicket: {
      screen: RegisterTicket,
      options: {
        title: 'Registrar',
      },
    },
  },
});

const RootStack = createNativeStackNavigator<NaviteStackParamList>({
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
        title: 'Resume de saída',
      }
    }
  },
});

const Navigation = createStaticNavigation(RootStack);

function App(): React.JSX.Element {
  return <ThemeProvider theme={theme}><SafeAreaView style={{ flex: 1 }}><Navigation /></SafeAreaView></ThemeProvider>;
}

export default App;
