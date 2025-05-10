import {View, Text, StyleSheet} from 'react-native';
import Config from 'react-native-config';
const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{`API_URL : ${Config.API_URL}`}</Text>
      <Text style={styles.text}>{`ENV : ${Config.ENVIRONMENT}`}</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});
