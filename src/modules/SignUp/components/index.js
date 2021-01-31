import React from 'react';

import { View, Image, Text } from 'react-native';

import Button from '@common/Button/components';
import TextField from '@common/TextField/components';

import AuthorizationLayout from '@layouts/AuthorizationLayout/components';

import LogoSmallIcon from '@assets/icons/LogoSmallIcon.png';

import styles from '@modules/SignUp/styles';

const SignUp = ({ navigation }) => {
  const onChangeEmail = value => console.log('onChangeEmail value:', value);

  const onChangePassword = value => console.log('onChangePassword value:', value);

  const onChangeName = value => console.log('onChangeName value:', value);

  const onHandleSignUp = () => console.log('on press login button');

  const onPressSignIn = () => {
    navigation.pop();
    setTimeout(() => navigation.push('SignIn'), 400);
  }

  return (
    <AuthorizationLayout>
      <View>
        <Image
          style={styles.layoutBackgroundIcon}
          source={LogoSmallIcon}
        />

        <Text>Sign Up</Text>

        <Text>Sign up now for free and start meditating, and explore Medic.</Text>

        <TextField
          placeholder="Name"
          onChange={onChangeName}
        />

        <TextField
          placeholder="Email Address"
          onChange={onChangeEmail}
        />

        <TextField
          placeholder="Password"
          onChange={onChangePassword}
        />

        <View>
          <Button
            onPress={onHandleSignUp}
            text="SIGNUP"
          />

          <Text style={styles.offerRegister}>
            Already have an account? &nbsp;

            <Text style={styles.registerBtn} onPress={onPressSignIn}>
              Sign In
            </Text>
          </Text>
        </View>
      </View>
    </AuthorizationLayout>
  );
};

SignUp.propTypes = {};

export default SignUp;
