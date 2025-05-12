import {View, Text} from 'react-native';
import {Props} from './models';
import {styles} from './styles';

const CryptoHeader = ({containerStyle}: Props) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.title}>Market</Text>
    </View>
  );
};
export default CryptoHeader;
