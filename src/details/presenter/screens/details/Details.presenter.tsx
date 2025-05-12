import DetailsComponent from './Details.component';
import {useGetCryptoDetails} from '@details/presenter/hooks';
import {DetailsScreenModels} from './models';

const DetailsPresenter = ({
  navigation,
  route,
}: DetailsScreenModels.PropsPresenter) => {
  const {cryptoID} = route.params;
  const {isLoadingGetCryptoDetails, isErrorGetCryptoDetails, cryptoDetails} =
    useGetCryptoDetails(cryptoID);
  const handlerOnGoBack = () => {
    if (!navigation.canGoBack()) {
      return;
    }
    navigation.goBack();
  };
  return (
    <DetailsComponent
      isLoading={isLoadingGetCryptoDetails}
      isError={isErrorGetCryptoDetails}
      details={cryptoDetails}
      onGoBack={handlerOnGoBack}
    />
  );
};

export default DetailsPresenter;
