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
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 15,
    marginTop: 15,
    color: theme.colors.heading,
    fontFamily: fonts.font.title700,
  },
  check: {
    top: 7,
    right: 7,
    width: 12,
    height: 12,
    borderWidth: 2,
    borderRadius: 3,
    position: 'absolute',
    borderColor: theme.colors.secondary50,
    backgroundColor: theme.colors.secondary100,
  },
  checked: {
    top: 7,
    right: 7,
    width: 10,
    height: 10,
    borderRadius: 3,
    position: 'absolute',
    backgroundColor: theme.colors.primary,
  },
});

export default styles;