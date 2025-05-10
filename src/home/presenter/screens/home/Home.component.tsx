import {View, Text, Button} from 'react-native';
import {HomeScreenModels} from './models';
import {styles} from './styles';

const HomeComponent = ({onShowDetails}: HomeScreenModels.PropsComponent) => {
  return (
    <View style={styles.container}>
      <Text>Home screen</Text>
      <Button
        title="go crypto details"
        onPress={() => onShowDetails('xx-xxx-xx')}
      />
    </View>
  );
};

export default HomeComponent;
