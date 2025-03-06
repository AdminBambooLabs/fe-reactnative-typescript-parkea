import React from 'react';
import {createStaticNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import RegistrerTicket from './src/pages/Tickets/RegisterTicket/RegisterTicket';

const RootStack = createNativeStackNavigator({
  screens: {
    RegisterTicket: RegistrerTicket,
  },
});

const Navigation = createStaticNavigation(RootStack);

function App(): React.JSX.Element {
  return <Navigation />;
}

export default App;
