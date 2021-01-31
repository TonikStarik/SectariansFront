import React from 'react';

import { View, Image, Text } from 'react-native';

import Button from '@common/Button/components';
import TextField from '@common/TextField/components';

import AuthorizationLayout from '@layouts/AuthorizationLayout/components';

import LogoSmallIcon from '@assets/icons/LogoSmallIcon.png';

import styles from '@modules/SignIn/styles';

const SignIn = ({ navigation }) => {
  const onChangeEmail = value => console.log('value:', value);

  const onChangePassword = value => console.log('value:', value);

  const onRedirectForgotPage = () => console.log('redirect to forgot page');

  const onHandleLogin = () => console.log('on press login button');

  const onPressSignUp = () => {
    navigation.pop();
    setTimeout(() => navigation.push('SignUp'), 400);
  }

  return (
    <AuthorizationLayout>
      <View>
        <Image
          style={styles.layoutBackgroundIcon}
          source={LogoSmallIcon}
        />

        <Text>Sign In</Text>

        <Text>Sign in now to acces your excercises and saved music.</Text>

        <TextField
          placeholder="Email Address"
          onChange={onChangeEmail}
        />

        <TextField
          placeholder="Password"
          onChange={onChangePassword}
          rideSideContent={<Text onPress={onRedirectForgotPage}>Forgot Password?</Text>}
        />

        <View>
          <Button
            onPress={onHandleLogin}
            text="LOGIN"
          />

          <Text style={styles.offerRegister}>
            Don't have an account? &nbsp;

            <Text style={styles.registerBtn} onPress={onPressSignUp}>
              Sign Up
            </Text>
          </Text>
        </View>
      </View>
    </AuthorizationLayout>
  );
};

SignIn.propTypes = {};

export default SignIn;
