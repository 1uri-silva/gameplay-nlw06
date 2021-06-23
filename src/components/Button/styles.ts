import { StyleSheet } from 'react-native';
import { fonts } from '../../global/styles/fonts';
import { theme } from '../../global/styles/theme';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    color: theme.colors.heading,
    fontFamily: fonts.font.text500,
    fontSize: 15,
    textAlign: 'center',
  },
  iconWrapper: {
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderColor: theme.colors.line,
  },
  icon: {
    width: 24,
    height: 18,
  },
});

export default styles;