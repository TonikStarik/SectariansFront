import React from 'react';

import PropTypes from 'prop-types';
import { ScrollView, Image, View } from 'react-native';

import AuthorizationBackgroundIcon from '@assets/icons/AuthorizationBackgroundIcon.png';

import styles from '@layouts/AuthorizationLayout/styles';

const AuthorizationLayout = ({ children }) => {
  return (
    <View style={styles.layoutWrapper}>
      <ScrollView style={styles.layoutChildren}>
        {children}
      </ScrollView>

      <Image
        style={styles.layoutBackgroundIcon}
        source={AuthorizationBackgroundIcon}
      />
    </View>
  );
};

AuthorizationLayout.propTypes = {
  children: PropTypes.element.isRequired
};

export default AuthorizationLayout;
