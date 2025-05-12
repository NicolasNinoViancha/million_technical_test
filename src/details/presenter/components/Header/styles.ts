import {StyleSheet} from 'react-native';
import {THEME} from '@shared/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  btnGoBack: {
    position: 'absolute',
    left: 10,
    width: 40,
    zIndex: 10,
  },
  ctnTitle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: THEME.COLORS.WHITE,
    fontSize: THEME.FONTSIZES[18],
    lineHeight: 20,
  },
});
