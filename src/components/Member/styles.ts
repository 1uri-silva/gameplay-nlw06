import { StyleSheet } from 'react-native';
import { fonts } from '../../global/styles/fonts';
import { theme } from '../../global/styles/theme';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontFamily: fonts.font.title700,
    color: theme.colors.heading,
    fontSize: 18,
  },
  nameStatus: {
    fontFamily: fonts.font.text400,
    color: theme.colors.highlight,
    fontSize: 13,
  },
  status: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  bulletStatus: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 9,
  }
});

export default styles;