import { StyleSheet, Dimensions } from 'react-native';

import colors from '@assets/colors';

const width = Dimensions.get('window').width;

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
  hintWrapper: {
    alignItems: 'center',
    marginTop: 32,
  },
  hintTitle: {
    fontFamily: 'Alegreya',
    fontSize: 34,
    fontWeight: 'bold',
    color: colors.white,
    marginBottom: 5
  },
  hintText: {
    fontFamily: 'Alegreya Sans',
    fontSize: 20,
    color: colors.white,
    textAlign: 'center',
    width: width * 0.75,
  },
  emptyBlock: {
    flex: 1,
  },
  formWrapper: {
    flex: 2,
    alignItems: 'center',
  },
  btnControllWrapper: {
    flex: 1,
  },
  offerRegister: {
    color: colors.white,
    marginTop: 15,
    textAlign: 'center',
  },
  registerBtn: {
    fontWeight: 'bold',
  },
  loginBtn: {
    backgroundColor: colors.grannySmith,
    height: 61,
    width: width * 0.85,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '500',
  },
  loginText: {
    color: colors.white,
    fontSize: 25,
  }
});

export default styles;
