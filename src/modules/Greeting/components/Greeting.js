import React from 'react';

import {
  Button,
  ImageBackground,
  ScrollView,
  Text,
  View,
} from 'react-native';

import forestBackground from '@assets/icons/forest.png';

import GreetingIcon from '@common/Icons/GreetingIcon';

import styles from '@modules/Greeting/styles';

const Greeting = ({ navigation }) => {
  const onPressSignIn = () => {
    navigation.navigate('SignIn');
  };

  const onPressSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <ImageBackground source={forestBackground} style={styles.greetingBackgroundImage}>
      <View style={styles.greetingPage}>
        <ScrollView contentContainerStyle={styles.greetingScroll}>
          <View style={styles.greetingLogoWrapper}>
            <GreetingIcon style={styles.greetingLogoImage} />
          </View>

          <View style={styles.hintWrapper}>
            <Text style={styles.hintTitle}>Welcome</Text>

            <Text style={styles.hintText}>Do meditation. Stay focused. Live a healthy life.</Text>
          </View>

          <Button style={styles.loginBtn} onPress={onPressSignIn} title="Login With Email" />

          <Text style={styles.offerRegister}>
            Don't have an account?

          <Text style={styles.registerBtn} onPress={onPressSignUp}>
              Sign Up
          </Text>
          </Text>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

Greeting.propTypes = {};

export default Greeting;
