import {Fragment} from 'react';
import {View, FlatList} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ViewLoading} from '@shared/components';
import {
  CryptoCard,
  CryptoHeader,
  ListEmptyComponent,
  ProfileCard,
} from '@home/presenter/components';
import {HomeScreenModels} from './models';
import {CryptoEntity} from '@home/domain/entities';
import {styles} from './styles';

const HomeComponent = ({
  isLoading = false,
  isLoadingMore = false,
  isError = false,
  data = [],
  onFetch,
  onFetchMore,
  onShowDetails,
}: HomeScreenModels.PropsComponent) => {
  const insets = useSafeAreaInsets();
  const insetTop = insets.top;
  const insetBottom = insets.bottom;
  const renderItem = ({item}: {item: CryptoEntity}) => (
    <CryptoCard
      name={item.name}
      symbol={item.symbol}
      priceUSD={item.priceUSD}
      percentChange24h={item.percentChange24h}
      percentChange1h={item.percentChange1h}
      percentChange7d={item.percentChange7d}
      onPress={() => onShowDetails(item.id)}
    />
  );
  return (
    <View
      style={[
        styles.container,
        insetTop > 0 && {paddingTop: insetTop},
        insetBottom > 0 && {paddingBottom: insetBottom},
      ]}>
      <View style={styles.ctnProfile}>
        <ProfileCard
          name="Nicolas Niño"
          email="nicolasemilionino@hotmail.com"
          portfolioUSD={'$ 5,271.00'}
          lastIncome="2,331.00"
          profitPercentage="152,68"
        />
      </View>
      <View style={styles.section}>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.ctnCryptoList}
          stickyHeaderIndices={[0]}
          data={isError ? [] : data}
          keyExtractor={item => `crypto_${item.id}`}
          renderItem={renderItem}
          ListHeaderComponent={
            <Fragment>
              <CryptoHeader containerStyle={styles.ctnCryptoHeader} />
            </Fragment>
          }
          ListEmptyComponent={
            <ListEmptyComponent isLoading={isLoading} isError={isError} />
          }
          ListFooterComponent={
            <ViewLoading isVisible={isLoadingMore && !isError} />
          }
          onEndReached={onFetchMore}
          onEndReachedThreshold={0.9}
          onRefresh={onFetch}
          refreshing={isLoading}
        />
      </View>
    </View>
  );
};

export default HomeComponent;
