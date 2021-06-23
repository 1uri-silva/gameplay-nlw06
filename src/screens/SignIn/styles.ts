import { StyleSheet } from 'react-native';
import { fonts } from '../../global/styles/fonts';
import { theme } from '../../global/styles/theme';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  image: {
    width: '100%',
    height: 360,
  },
  content: {
    paddingHorizontal: 50,
    marginTop: -40,
  },
  title: {
    color: theme.colors.heading,
    fontFamily: fonts.font.title700,
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 40,
    fontSize: 40,
  },
  subTitle: {
    color: theme.colors.heading,
    fontFamily: fonts.font.title500,
    textAlign: 'center',
    marginBottom: 64,
    lineHeight:25,
    fontSize: 15,
  },
});

export default styles;