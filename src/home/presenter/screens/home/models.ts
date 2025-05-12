import {CryptoEntity} from '@home/domain/entities';
import {NavigationModels} from '@shared/navigation/models';

export namespace HomeScreenModels {
  export type PropsPresenter =
    NavigationModels.RootStackScreenProps<NavigationModels.MAIN_ROUTES_NAMES.HOME>;

  export type PropsComponent = {
    testID?: string;
    isLoading?: boolean;
    isLoadingMore?: boolean;
    isError?: boolean;
    data?: CryptoEntity[];
    onFetch: () => void;
    onFetchMore: () => void;
    onShowDetails: (cryptoID: string) => void;
  };
}
