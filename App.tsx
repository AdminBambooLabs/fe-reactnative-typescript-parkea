import React from 'react';
import {StatusBar, View} from 'react-native';
import {createStaticNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Button} from './src/components/Button';

const HomeScreen = () => {
  const safePadding = '5%';

  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <StatusBar barStyle="dark-content" />
      <View style={{backgroundColor: Colors.white}}>
        <Button>HELLO WORLD</Button>
      </View>
    </View>
  );
};

const RootStack = createNativeStackNavigator({
  screens: {
    Home: HomeScreen,
  },
});

const Navigation = createStaticNavigation(RootStack);

function App(): React.JSX.Element {
  return <Navigation />;
}

export default App;
