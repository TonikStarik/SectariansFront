import React from 'react';

import 'react-native-gesture-handler';
import { Provider as ReduxProvider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import App from './App';
import store from '@store';

const Launcher = () => (
  <ReduxProvider store={store}>
    <NavigationContainer>
      <App />
    </NavigationContainer>
  </ReduxProvider>
);

Launcher.propTypes = {};

export default Launcher;
