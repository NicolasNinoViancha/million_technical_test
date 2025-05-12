import {StyleSheet} from 'react-native';
import {THEME} from '@shared/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: THEME.FONTSIZES[20],
    color: THEME.COLORS.WHITE,
  },
});
