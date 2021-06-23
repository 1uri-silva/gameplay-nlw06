import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { fonts } from '../../global/styles/fonts';
import { theme } from '../../global/styles/theme';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 104,
    paddingTop: getStatusBarHeight(),
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontFamily: fonts.font.title700,
    fontSize: 20,
    color: theme.colors.heading,
  },
});

export default styles;