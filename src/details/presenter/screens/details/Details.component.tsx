import {View, Text, Button} from 'react-native';
import {DetailsScreenModels} from './models';
import {styles} from './styles';

const DetailsComponent = ({
  details = undefined,
  isLoading = false,
  isError = false,
  onGoBack,
}: DetailsScreenModels.PropsComponent) => {
  return (
    <View style={styles.container}>
      <Text>Details Crypto</Text>
      <Text>{`${JSON.stringify({details}, null, 2)}`}</Text>
      <Button title="go home" onPress={onGoBack} />
    </View>
  );
};

export default DetailsComponent;
