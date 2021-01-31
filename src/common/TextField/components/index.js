import React, { useState } from 'react';

import { TextInput } from 'react-native';

import styles from '@common/TextField/styles';

const TextField = ({ placeholder, onChange }) => {
  const [fieldValue, setFieldValue] = useState('');

  const onSetField = (value) => {
    setFieldValue(value);
    onChange(value);
  }

  return (
    <TextInput
      onChangeText={text => onSetField(text)}
      placeholder={placeholder}
      style={styles.textInput}
      value={fieldValue}
    />
  )
}

export default TextField;
