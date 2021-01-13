import React from 'react';

import {
  Button,
  ScrollView,
  Text,
  View,
} from 'react-native';

import LogoIcon from '@common/Icons/LogoIcon';

const Greeting = ({ navigation }) => {
  console.log(navigation)
  const onPressSignIn = () => {
    navigation.navigate('SignIn');
  };

  const onPressSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'green' }}>
      <ScrollView>
        <LogoIcon />

        <View>
          <Text>Welcome</Text>

          <Text>Do meditation. Stay focused. Live a healthy life.</Text>
        </View>

        <Button onPress={onPressSignIn} title="Login With Email" />

        <Text>Don't have an account? <Button onPress={onPressSignUp} title="Sign Up" /></Text>
      </ScrollView>
    </View>
  );
};

Greeting.propTypes = {};

export default Greeting;
