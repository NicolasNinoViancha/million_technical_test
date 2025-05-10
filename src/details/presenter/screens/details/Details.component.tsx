import {View, Text, Button} from 'react-native';
import {DetailsScreenModels} from './models';
import {styles} from './styles';

const HomeComponent = ({
  cryptoID = '',
  onGoBack,
}: DetailsScreenModels.PropsComponent) => {
  return (
    <View style={styles.container}>
      <Text>Details screen</Text>
      <Text>Crypto ID: {cryptoID}</Text>
      <Button title="go home" onPress={onGoBack} />
    </View>
  );
};

export default HomeComponent;
