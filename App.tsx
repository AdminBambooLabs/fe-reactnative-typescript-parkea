import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStaticNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SafeAreaView } from 'react-native';

import { ParkingResume } from '@/screens/ParkingResume';
import { RegisterTicket } from '@/screens/Tickets/RegisterTicket';
import { TicketDetails } from '@/screens/Tickets/TicketDetails';
import { ITicket } from '@/types/tickets';

export type NaviteStackParamList = {
  Home: undefined;
  TicketDetails: { ticket: ITicket };
};

export type BottomTabParamList = {
  ParkingResume: undefined;
  RegisterTicket: undefined;
};

export type RootNavigationParamList = NaviteStackParamList & BottomTabParamList;

const HomeTabs = createBottomTabNavigator<BottomTabParamList>({
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
    Home: {
      screen: HomeTabs,
      options: {
        headerShown: false,
      },
    },
    TicketDetails: {
      screen: TicketDetails,
      options: {
        title: 'Detalhe do veículo'
      }
    }
  },
});

const Navigation = createStaticNavigation(RootStack);

function App(): React.JSX.Element {
  return <SafeAreaView style={{ flex: 1 }}><Navigation /></SafeAreaView>;
}

export default App;
