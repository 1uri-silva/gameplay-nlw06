import { StyleSheet } from 'react-native';
import { fonts } from '../../global/styles/fonts';
import { theme } from '../../global/styles/theme';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  content: {
    flex: 1,
    marginLeft: 20,
    justifyContent: 'center',
  },
  title: {
    fontFamily: fonts.font.title700,
    color: theme.colors.heading,
    fontSize: 18,
    marginBottom: 4,
  },
  type: {
    fontFamily: fonts.font.text400,
    color: theme.colors.highlight,
    fontSize: 13,
  }
});
export default styles;