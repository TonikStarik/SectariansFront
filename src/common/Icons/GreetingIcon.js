import React from 'react';

import { Image } from 'react-native';

import AppIcon from '@assets/icons/Greeting.png';

const GreetingIcon = props => <Image source={AppIcon} {...props} />;

export default GreetingIcon;
