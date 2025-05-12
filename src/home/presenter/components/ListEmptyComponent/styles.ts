import {StyleSheet, Dimensions} from 'react-native';
import {THEME} from '@shared/theme';

const {height} = Dimensions.get('window');

const VIEW_ERROR_HEIGHT = height * 0.2;

export const styles = StyleSheet.create({
  ctnError: {
    width: '100%',
    height: VIEW_ERROR_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    color: THEME.COLORS.RED,
    fontSize: THEME.FONTSIZES[20],
    textAlign: 'center',
  },
});
