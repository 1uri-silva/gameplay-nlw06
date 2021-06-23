import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { fonts } from '../../global/styles/fonts';
import { theme } from '../../global/styles/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  banner: {
    width: '100%',
    height: 234,
    marginBottom: 30,
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 24,
    marginBottom: 30
  },
  title: {
    fontSize: 28,
    fontFamily: fonts.font.title700,
    color: theme.colors.heading,
  },
  subTitle: {
    fontSize: 13,
    fontFamily: fonts.font.text400,
    color: theme.colors.heading,
  },
  members: {
    marginLeft: 24,
    marginTop: 27,
  },
  footer: {
    paddingHorizontal: 24,
    paddingVertical: 15,
    marginBottom: getBottomSpace(),
  },
});

export default styles;