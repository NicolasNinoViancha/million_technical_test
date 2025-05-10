import DetailsComponent from './Details.component';
import {DetailsScreenModels} from './models';

const DetailsPresenter = ({
  navigation,
  route,
}: DetailsScreenModels.PropsPresenter) => {
  const {cryptoID} = route.params;
  const handlerOnGoBack = () => {
    if (!navigation.canGoBack()) {
      return;
    }
    navigation.goBack();
  };
  return <DetailsComponent cryptoID={cryptoID} onGoBack={handlerOnGoBack} />;
};

export default DetailsPresenter;
