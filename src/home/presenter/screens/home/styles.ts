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
  section: {
    flex: 1,
    width: '100%',
    borderRadius: 20,
    paddingVertical: 25,
    backgroundColor: THEME.COLORS.LIGHT_BLACK,
  },
  ctnProfile: {
    width: '100%',
    borderRadius: 20,
    paddingVertical: 25,
    backgroundColor: THEME.COLORS.LIGHT_BLACK,
    marginBottom: 20,
  },
  ctnCryptoList: {
    paddingHorizontal: 20,
  },
  ctnCryptoHeader: {
    paddingBottom: 10,
    backgroundColor: THEME.COLORS.LIGHT_BLACK,
  },
});
