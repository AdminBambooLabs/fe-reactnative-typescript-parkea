import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { ParkingResume } from '@/screens/ParkingResume';
import { RegisterTicket } from '@/screens/Tickets/RegisterTicket';

const HomeTabs = createBottomTabNavigator({
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

const RootStack = createNativeStackNavigator({
  screens: {
    Home: {
      screen: HomeTabs,
      options: {
        headerShown: false,
      },
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

function App(): React.JSX.Element {
  return <Navigation />;
}

export default App;
