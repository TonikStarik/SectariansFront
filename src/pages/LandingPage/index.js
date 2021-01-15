import React from 'react';

import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import Greeting from '@modules/Greeting/components/Greeting';
import SignIn from '@modules/SignIn/components/SignIn';
import SignUp from '@modules/SignUp/components/SignUp';

const Stack = createStackNavigator();

const rightSideAnimation = {
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

const leftSideAnimation = {
  cardStyleInterpolator: ({ current, layouts }) => ({
    cardStyle: {
      transform: [
        {
          translateX: current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [-layouts.screen.width, 0],
          }),
        },
      ],
    },
  }),
};

const LandingPage = () => {
  return (
    <Stack.Navigator
      cardStyle={{ flex: 1, margin: 0 }}
      initialRouteName='Greeting'
      headerMode={false}
    >
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={leftSideAnimation}
      />

      <Stack.Screen
        name="Greeting"
        component={Greeting}
      />

      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={rightSideAnimation}
      />
    </Stack.Navigator>
  );
}

export default LandingPage;
