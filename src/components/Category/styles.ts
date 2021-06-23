import { StyleSheet } from 'react-native';
import { fonts } from '../../global/styles/fonts';
import { theme } from '../../global/styles/theme';

const styles = StyleSheet.create({
  container: {
    width: 104,
    height: 120,
    marginRight: 8,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    width: 100,
    height: 116,
    borderRadius: 8,
    paddingVertical: 7,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.secondary40,
  },
  title: {
    fontSize: 15,
    color: theme.colors.heading,
    fontFamily: fonts.font.title500,
  },
  check: {
    width: 12,
    height: 12,
    borderWidth: 2,
    marginRight: 7,
    borderRadius: 3,
    alignSelf: 'flex-end',
    borderColor: theme.colors.secondary50,
    backgroundColor: theme.colors.secondary100,
  },
  checked: {
    width: 10,
    height: 10,
    marginRight: 7,
    borderRadius: 3,
    alignSelf: 'flex-end',
    backgroundColor: theme.colors.primary,
  },
});

export default styles;