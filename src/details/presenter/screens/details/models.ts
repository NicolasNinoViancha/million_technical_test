import {NavigationModels} from '@shared/navigation/models';

export namespace DetailsScreenModels {
  export type PropsPresenter =
    NavigationModels.RootStackScreenProps<NavigationModels.MAIN_ROUTES_NAMES.DETAILS>;

  export type PropsComponent = {
    testID?: string;
    cryptoID?: string;
    onGoBack: () => void;
  };
}
