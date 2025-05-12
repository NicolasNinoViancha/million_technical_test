import {StyleSheet} from 'react-native';
import {THEME} from '@shared/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: THEME.COLORS.BLACK,
    paddingTop: 10,
    paddingBottom: 10,
  },
  ctnHeader: {
    marginBottom: 10,
  },
  ctnDetails: {
    flex: 1,
    width: '100%',
    borderRadius: 20,
    paddingVertical: 25,
    paddingHorizontal: 20,
    backgroundColor: THEME.COLORS.LIGHT_BLACK,
  },
  error: {
    fontSize: THEME.FONTSIZES[20],
    color: THEME.COLORS.RED,
  },
});
