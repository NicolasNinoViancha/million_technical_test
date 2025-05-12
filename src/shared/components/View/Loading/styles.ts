import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const VIEW_HEIGHT = width * 0.2;

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: VIEW_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
