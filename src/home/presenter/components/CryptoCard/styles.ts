import {StyleSheet} from 'react-native';
import {THEME} from '@shared/theme';

const ICON_SIZE = 30;

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    paddingVertical: 15,
    borderColor: THEME.COLORS.LIGHT_GRAY,
  },
  ctnIcon: {
    width: ICON_SIZE,
    height: ICON_SIZE,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: THEME.COLORS.LIGHT_GRAY,
    borderRadius: ICON_SIZE,
  },
  ctnName: {
    flex: 1,
    marginHorizontal: 10,
  },
  name: {
    fontSize: THEME.FONTSIZES[16],
    lineHeight: 20,
    color: THEME.COLORS.WHITE,
  },
  priceUSD: {
    textAlign: 'right',
    lineHeight: 20,
  },
  symbol: {
    fontSize: THEME.FONTSIZES[14],
    color: THEME.COLORS.LIGHT_GRAY,
  },
  ctnDetails: {
    justifyContent: 'flex-end',
  },
  ctnPercent: {
    flexDirection: 'row',
  },
  percent: {
    marginLeft: 10,
  },
  percent24h: {
    color: THEME.COLORS.BLACK_GREEN,
  },
  percent1h: {
    color: THEME.COLORS.BLACK_RED,
  },
});
