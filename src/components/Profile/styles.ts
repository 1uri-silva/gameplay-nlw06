import { StyleSheet } from 'react-native';
import { fonts } from '../../global/styles/fonts';
import { theme } from '../../global/styles/theme';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  user: {
    flexDirection: 'row',
  },
  greeting: {
    fontFamily: fonts.font.title500,
    color: theme.colors.heading,
    marginRight: 6,
    fontSize: 24,
  },
  username: {
    fontFamily: fonts.font.title700,
    color: theme.colors.highlight,
    fontSize: 24,
  },
  message: {
    color: theme.colors.highlight,
    fontFamily: fonts.font.text400,
  },
});

export default styles;