import React from 'react';

import { Text, ScrollView, Button } from 'react-native';

const SignUp = ({ navigation }) => {
  const onPressSignIn = () => {
    navigation.pop();
    setTimeout(() => navigation.push('SignIn'), 400);
  };

  return (
    <ScrollView style={{ backgroundColor: 'red' }}>
      <Text>SignUp</Text>

      <Button onPress={onPressSignIn} title="Go to sign in" />
    </ScrollView>
  );
};

SignUp.propTypes = {};

export default SignUp;
