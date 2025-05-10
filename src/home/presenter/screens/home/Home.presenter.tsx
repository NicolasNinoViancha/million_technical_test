import HomeComponent from './Home.component';
import {HomeScreenModels} from './models';
import {NavigationModels} from '@shared/navigation/models';

const HomePresenter = ({navigation}: HomeScreenModels.PropsPresenter) => {
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
