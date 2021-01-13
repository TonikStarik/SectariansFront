import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import LandingPage from '@pages/LandingPage';
import MainPage from '@pages/MainPage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Stack.Navigator
      initialRouteName='Landing'
      headerMode={false}
    >
      <Stack.Screen name="Landing" component={LandingPage} />

      <Stack.Screen name="Main" component={MainPage} />
    </Stack.Navigator>
  );
};

App.propTypes = {};

export default App;
