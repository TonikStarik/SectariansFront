import { StyleSheet } from 'react-native';

import colors from '@assets/colors';

const styles = StyleSheet.create({
  greetingBackgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
  },
  greetingPage: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  greetingScroll: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  greetingLogoWrapper: {
    height: 200,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingLogoImage: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  hintWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    color: colors.white,
  },
});

export default styles;
