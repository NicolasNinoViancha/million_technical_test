import {TouchableOpacity, View, Text} from 'react-native';
import {Icon} from '@shared/components';
import {Props} from './models';
import {styles} from './styles';
import {THEME} from '@shared/theme';

const Header = ({containerStyle, title = '', onGoBack}: Props) => (
  <View style={[styles.container, containerStyle]}>
    <TouchableOpacity style={styles.btnGoBack} onPress={onGoBack}>
      <Icon name="arrow-left" size={18} color={THEME.COLORS.WHITE} />
    </TouchableOpacity>
    <View style={styles.ctnTitle}>
      <Text style={styles.title}>{title}</Text>
    </View>
  </View>
);

export default Header;
