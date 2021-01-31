import React from 'react';

import { TouchableHighlight, Text } from 'react-native';

import styles from '@common/Button/styles';

const Button = ({ text: btnText, onPressHandler }) => (
  <TouchableHighlight
    style={styles.buttonStyle}
    onPress={onPressHandler}
    underlayColor='#fff'
  >
    <Text>{btnText}</Text>
  </TouchableHighlight>
);

export default Button;
