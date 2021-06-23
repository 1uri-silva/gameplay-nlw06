import { StyleSheet } from 'react-native';
import { fonts } from '../../global/styles/fonts';
import { theme } from '../../global/styles/theme';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  },
  title: {
    fontFamily: fonts.font.title700,
    color: theme.colors.heading,
    fontSize: 18,
  },
  subTitle: {
    fontFamily: fonts.font.text400,
    color: theme.colors.highlight,
    fontSize: 13,
  },
});

export default styles;