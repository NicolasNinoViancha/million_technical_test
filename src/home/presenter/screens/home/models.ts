import {NavigationModels} from '@shared/navigation/models';

export namespace HomeScreenModels {
  export type PropsPresenter =
    NavigationModels.RootStackScreenProps<NavigationModels.MAIN_ROUTES_NAMES.HOME>;

  export type PropsComponent = {
    testID?: string;
    onShowDetails: (cryptoID: string) => void;
  };
}
