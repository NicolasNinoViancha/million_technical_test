import {Text} from 'react-native';
import {ViewLoading} from '@shared/components';
import {Props} from './models';
import {styles} from './styles';
import {LABELS} from './constants';
import {View} from 'react-native';

const ListEmptyComponent = ({isError = false, isLoading = false}: Props) => {
  if (isError) {
    return (
      <View style={styles.ctnError}>
        <Text style={styles.error}>{LABELS.ERROR}</Text>
      </View>
    );
  }
  return <ViewLoading isVisible={isLoading} />;
};

export default ListEmptyComponent;
