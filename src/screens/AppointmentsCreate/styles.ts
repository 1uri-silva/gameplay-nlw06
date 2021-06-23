import { StyleSheet } from 'react-native';
import { fonts } from '../../global/styles/fonts';
import { theme } from '../../global/styles/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  label: {
    fontSize: 18,
    fontFamily: fonts.font.title700,
    color: theme.colors.heading,
  },
  form: {
    paddingHorizontal: 24,
    marginTop: 32
  },
  select: {
    width: '100%',
    height: 68,
    flexDirection: 'row',
    borderColor: theme.colors.secondary50,
    borderRadius: 8,
    alignItems: 'center',
    paddingRight: 25,
    borderWidth: 1,
    overflow: 'hidden',
  },
  selectBody: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: 64,
    height: 68,
    backgroundColor: theme.colors.secondary50,
    borderWidth: 1,
    borderRadius: 8
  },
  field: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  column: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  divider: {
    marginRight: 4,
    fontSize: 15,
    fontFamily: fonts.font.text500,
    color: theme.colors.highlight,
  },
  cracteresLimit: {
    fontFamily: fonts.font.text400,
    fontSize: 13,
    color: theme.colors.heading,
  },
  footer: {
    marginVertical: 20,
    marginBottom: 50
  }
});

export default styles;