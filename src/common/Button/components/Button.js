import React from 'react';

import { TouchableHighlight, Text } from 'react-native';

const Button = ({ text: btnText, onPressHandler }) => (
  <TouchableHighlight
    // style={styles.submit}
    onPress={onPressHandler}
    underlayColor='#fff'
  >
    <Text>{btnText}</Text>
  </TouchableHighlight>
);

export default Button;
