import React from 'react';
import { SafeAreaView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStaticNavigation, NavigatorScreenParams } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ParkingResume } from '@/screens/ParkingResume';
import { RegisterTicket } from '@/screens/Tickets/RegisterTicket';
import { TicketDetails, TicketDetailsDeleteButton } from '@/screens/Tickets/TicketDetails';
import { ITicket } from '@/types/tickets';
import { TicketResume } from '@/screens/Tickets/TicketResume';

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
  return <SafeAreaView style={{ flex: 1 }}><Navigation /></SafeAreaView>;
}

export default App;
