import {View, Text} from 'react-native';
import {Props} from './models';
import {styles} from './styles';

const Detail = ({containerStyle, name = '', value = ''}: Props) => (
  <View style={[styles.container, containerStyle]}>
    <View style={styles.ctnName}>
      <Text style={styles.name}>{name}</Text>
    </View>
    <View style={styles.separator} />
    <View style={styles.ctnValue}>
      <Text style={styles.value}>{`${!value ? 'NA' : value}`}</Text>
    </View>
  </View>
);

export default Detail;
