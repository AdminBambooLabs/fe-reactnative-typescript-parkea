/* eslint-disable react-native/no-inline-styles */
import { Buffer } from 'buffer';
import { decode, encode } from 'base-64';
import React from 'react';

import { SafeAreaView } from 'react-native';
import Providers from '@/context/Providers';
import { MainNavigator } from '@/navigation/MainNavigator';

import 'react-native-get-random-values';
import '@ethersproject/shims';

if (typeof global.Buffer === 'undefined') { global.Buffer = Buffer; }
if (!global.btoa) { global.btoa = encode; }
if (!global.atob) { global.atob = decode; }

import './src/libs/amplify/amplifyConfig';

function App(): React.JSX.Element {
  return (
    <Providers>
      <SafeAreaView style={{ flex: 1 }}>
        <MainNavigator />
      </SafeAreaView>
    </Providers>
  );
}

export default App;
