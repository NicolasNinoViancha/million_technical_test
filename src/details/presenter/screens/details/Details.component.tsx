import {View, Text, ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ViewLoading, ViewSection} from '@shared/components';
import {Header, Detail} from '@details/presenter/components';
import {DetailsScreenModels} from './models';
import {styles} from './styles';
import {LABELS} from './constants';

const DetailsComponent = ({
  details = undefined,
  isLoading = false,
  isError = false,
  onGoBack,
}: DetailsScreenModels.PropsComponent) => {
  const insets = useSafeAreaInsets();
  const insetTop = insets.top;
  const insetBottom = insets.bottom;
  return (
    <View
      style={[
        styles.container,
        insetTop > 0 && {paddingTop: insetTop},
        insetBottom > 0 && {paddingBottom: insetBottom},
      ]}>
      <Header
        containerStyle={styles.ctnHeader}
        title={details?.name}
        onGoBack={onGoBack}
      />
      <View style={styles.ctnDetails}>
        <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
          <ViewLoading isVisible={isLoading && !isError} />
          <ViewSection isVisible={isError}>
            <Text style={styles.error}>{LABELS.ERROR}</Text>
          </ViewSection>
          <ViewSection isVisible={!isLoading && !isError}>
            <Detail name={'id'} value={details?.id} />
            <Detail name={'symbol'} value={details?.symbol} />
            <Detail name={'symbol'} value={details?.symbol} />
            <Detail name={'rank'} value={`${details?.rank}`} />
            <Detail name={'priceUSD'} value={details?.priceUSD} />
            <Detail
              name={'percentChange24h'}
              value={details?.percentChange24h}
            />
            <Detail name={'percentChange1h'} value={details?.percentChange1h} />
            <Detail name={'percentChange7d'} value={details?.percentChange7d} />
            <Detail name={'priceBTC'} value={details?.priceBTC} />
            <Detail name={'marketCapUSD'} value={details?.marketCapUSD} />
            <Detail name={'volume24'} value={`${details?.volume24}`} />
            <Detail name={'volume24a'} value={`${details?.volume24a}`} />
            <Detail name={'csupply'} value={details?.csupply} />
            <Detail name={'tsupply'} value={details?.tsupply} />
            <Detail name={'msupply'} value={details?.msupply} />
          </ViewSection>
        </ScrollView>
      </View>
    </View>
  );
};

export default DetailsComponent;
