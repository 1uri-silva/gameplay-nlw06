import { StyleSheet } from 'react-native';
import { fonts } from '../../global/styles/fonts';
import { theme } from '../../global/styles/theme';

const styles = StyleSheet.create({
  container: {
    width: 48,
    height: 48,
    backgroundColor: theme.colors.secondary40,
    color: theme.colors.heading,
    borderRadius: 8,
    fontFamily: fonts.font.text400,
    fontSize: 13,
    marginRight: 4,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: theme.colors.secondary50
  },
});

export default styles;