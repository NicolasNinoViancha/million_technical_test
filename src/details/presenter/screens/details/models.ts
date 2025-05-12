import {NavigationModels} from '@shared/navigation/models';
import {CryptoDetailsEntity} from '@details/domain/entities';

export namespace DetailsScreenModels {
  export type PropsPresenter =
    NavigationModels.RootStackScreenProps<NavigationModels.MAIN_ROUTES_NAMES.DETAILS>;

  export type PropsComponent = {
    testID?: string;
    details?: CryptoDetailsEntity;
    isLoading?: boolean;
    isError?: boolean;
    onGoBack: () => void;
  };
}
