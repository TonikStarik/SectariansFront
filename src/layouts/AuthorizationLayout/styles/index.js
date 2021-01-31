import { StyleSheet } from 'react-native';

import colors from '@assets/colors';

const styles = StyleSheet.create({
  layoutWrapper: {
    flex: 1,
    position: 'relative',
    backgroundColor: colors.outerSpace,
  },
  layoutChildren: {},
  layoutBackgroundIcon: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
  },
});

export default styles;
