import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import {Props} from './models';
import {THEME} from '@shared/theme';

const Icon = ({
  name = 'user',
  size = 10,
  color = THEME.COLORS.black,
}: Props) => <IconFontAwesome name={name} size={size} color={color} />;

export default Icon;
