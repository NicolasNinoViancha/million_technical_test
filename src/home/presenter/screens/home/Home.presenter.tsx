import HomeComponent from './Home.component';
import {useGetCryptoList} from '@home/presenter/hooks';
import {HomeScreenModels} from './models';
import {NavigationModels} from '@shared/navigation/models';

const HomePresenter = ({navigation}: HomeScreenModels.PropsPresenter) => {
  const {
    isLoadingGetCryptoList,
    isLoadingMoreGetCryptoList,
    isErrorGetCryptoList,
    cryptoList,
    getMoreCryptoList,
  } = useGetCryptoList();
  return (
    <HomeComponent
      onShowDetails={cryptoID =>
        navigation.navigate(NavigationModels.MAIN_ROUTES_NAMES.DETAILS, {
          cryptoID,
        })
      }
    />
  );
};

export default HomePresenter;
