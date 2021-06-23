import { StyleSheet } from 'react-native';
// import { fonts } from '../../global/styles/fonts';
import { theme } from '../../global/styles/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
  },
  overlay: {
    backgroundColor: theme.colors.overlay,
    flex: 1,
  },
  bar: {
    width: 39,
    height: 2,
    borderRadius: 2,
    backgroundColor: theme.colors.secondary30,
    alignSelf: 'center',
    marginTop: 13,
    marginBottom: 103,
  }
});

export default styles;