import { StyleSheet } from 'react-native';
import { fonts } from '../../global/styles/fonts';
import { theme } from '../../global/styles/theme';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  content: {
    flex: 1,
  },
  header: {
    width: '100%',
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    color: theme.colors.heading,
    fontFamily: fonts.font.title700,
  },
  category: {
    fontSize: 13,
    marginRight: 24,
    color: theme.colors.highlight,
    fontFamily: fonts.font.text400,
  },
  footer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  playerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  date: {
    fontSize: 13,
    marginLeft: 7,
    color: theme.colors.heading,
    fontFamily: fonts.font.text500,
  },
  player: {
    fontSize: 13,
    marginLeft: 7,
    marginRight: 24,
    fontFamily: fonts.font.text500,
  }
});
export default styles;