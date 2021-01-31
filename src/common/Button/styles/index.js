import { StyleSheet, Dimensions } from 'react-native';

import colors from '@assets/colors';

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: colors.grannySmith,
    height: 61,
    width: width * 0.85,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '500',
  },
});

export default styles;