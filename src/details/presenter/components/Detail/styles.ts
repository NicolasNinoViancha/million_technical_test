import {StyleSheet} from 'react-native';
import {THEME} from '@shared/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderColor: THEME.COLORS.LIGHT_GRAY,
  },
  ctnName: {
    width: '40%',
  },
  name: {
    fontSize: THEME.FONTSIZES[16],
    color: THEME.COLORS.WHITE,
  },
  ctnValue: {
    width: '60%',
  },
  value: {
    fontSize: THEME.FONTSIZES[14],
    color: THEME.COLORS.BLACK_GREEN,
  },
  separator: {
    marginHorizontal: 10,
    width: 0.8,
    backgroundColor: THEME.COLORS.LIGHT_GRAY,
  },
});
