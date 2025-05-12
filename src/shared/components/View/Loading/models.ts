import {StyleProp, ViewStyle} from 'react-native';
import {THEME} from '@shared/theme';

export type Props = {
  containerStyle?: StyleProp<ViewStyle>;
  isVisible?: boolean;
  color?: keyof typeof THEME.COLORS;
};
