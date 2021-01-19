import React from 'react';

import {
  TouchableHighlight,
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
          <View style={styles.emptyBlock} />

          <View style={styles.formWrapper}>
            <View style={styles.greetingLogoWrapper}>
              <GreetingIcon />
            </View>

            <View style={styles.hintWrapper}>
              <Text style={styles.hintTitle}>WELCOME</Text>

              <Text style={styles.hintText}>Do meditation. Stay focused. Live a healthy life.</Text>
            </View>
          </View>

          <View style={styles.btnControllWrapper}>
            <TouchableHighlight
              activeOpacity={0.8}
              underlayColor="#DDDDDD"
              style={styles.loginBtn}
              onPress={onPressSignIn}
            >
              <Text style={styles.loginText}>Login With Email</Text>
            </TouchableHighlight>

            <Text style={styles.offerRegister}>
              Don't have an account? &nbsp;

              <Text style={styles.registerBtn} onPress={onPressSignUp}>
                Sign Up
              </Text>
            </Text>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

Greeting.propTypes = {};

export default Greeting;
