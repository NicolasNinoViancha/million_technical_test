import {THEME} from '@shared/theme';
import {StyleSheet} from 'react-native';

const AVATAR_SIZE = 50,
  NOTIFICATION_SIZE = 30,
  SIZE_BADGE = 8;

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  ctnAvatar: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  ctnUserData: {
    flex: 1,
    marginHorizontal: 10,
  },
  name: {
    fontSize: THEME.FONTSIZES[14],
    color: THEME.COLORS.WHITE,
    lineHeight: 20,
  },
  email: {
    fontSize: THEME.FONTSIZES[12],
    color: THEME.COLORS.LIGHT_GRAY,
  },
  porfolio: {
    fontSize: THEME.FONTSIZES[14],
    color: THEME.COLORS.LIGHT_GRAY,
    lineHeight: 18,
  },
  ctnFinancialData: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  portfolioUSD: {
    fontSize: THEME.FONTSIZES[25],
    color: THEME.COLORS.WHITE,
  },
  statistics: {
    textAlign: 'right',
    lineHeight: 20,
    fontSize: THEME.FONTSIZES[14],
    color: THEME.COLORS.LIGHT_GRAY,
  },
  lastIncome: {
    color: THEME.COLORS.BLACK_GREEN,
  },
  ctnNotification: {
    width: NOTIFICATION_SIZE,
    height: NOTIFICATION_SIZE,
    borderRadius: NOTIFICATION_SIZE,
    backgroundColor: THEME.COLORS.LIGHT_GRAY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badge: {
    width: SIZE_BADGE,
    height: SIZE_BADGE,
    borderRadius: SIZE_BADGE,
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: THEME.COLORS.RED,
    zIndex: 10,
  },
});
