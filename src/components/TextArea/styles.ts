import { StyleSheet } from 'react-native';
import { fonts } from '../../global/styles/fonts';
import { theme } from '../../global/styles/theme';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 95,
    fontSize: 13,
    borderWidth: 1,
    paddingTop: 16,
    marginRight: 4,
    borderRadius: 8,
    paddingHorizontal: 16,
    textAlignVertical: 'top',
    color: theme.colors.heading,
    fontFamily: fonts.font.text400,
    borderColor: theme.colors.secondary50,
    backgroundColor: theme.colors.secondary40,
  },
});

export default styles;