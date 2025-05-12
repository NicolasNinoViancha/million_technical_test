import {View, ActivityIndicator} from 'react-native';
import {Props} from './models';
import {THEME} from '@shared/theme';
import {styles} from './styles';

const Loading = ({
  containerStyle,
  isVisible = false,
  color = 'WHITE',
}: Props) => {
  const COLOR = THEME.COLORS[color];
  if (!isVisible) {
    return null;
  }
  return (
    <View style={[styles.container, containerStyle]}>
      <ActivityIndicator size="small" color={COLOR} />
    </View>
  );
};

export default Loading;
