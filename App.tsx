/* eslint-disable react-native/no-inline-styles */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStaticNavigation, NavigatorScreenParams } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SafeAreaView } from 'react-native';

import { HeaderTitle } from '@/components/Header/HeaderTitle';
import { ParkingResumeHeader } from '@/components/Header/ParkingResumeHeader';
import { TabBar } from '@/components/TabBar';
import Providers from '@/context/Providers';
import { Cashier } from '@/screens/Cashier';
import { Confirmation, ConfirmationRouteProps } from '@/screens/Confirmation';
import { ParkingResume } from '@/screens/ParkingResume';
import { TicketDetails, TicketDetailsDeleteButton } from '@/screens/Tickets/TicketDetails';
import { TicketRegister } from '@/screens/Tickets/TicketRegister';
import { TicketResume } from '@/screens/Tickets/TicketResume';

import { colors } from '@/theme/colors';
import { ITicket } from '@/types/tickets';

export type NaviteStackParamList = {
  BottomTabs: NavigatorScreenParams<BottomTabParamList>;
  TicketDetails: { ticket: ITicket };
  TicketResume: { ticket: ITicket };
  Confirmation: ConfirmationRouteProps;
};

export type BottomTabParamList = {
  ParkingResume: undefined;
  TicketRegister: undefined;
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

const Navigation = createStaticNavigation(RootStack);

function App(): React.JSX.Element {
  return (
    <Providers>
      <SafeAreaView style={{ flex: 1 }}>
        <Navigation />
      </SafeAreaView>
    </Providers>
  );
}

export default App;
