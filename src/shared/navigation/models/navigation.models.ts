/**
 * @* -- global declaration --
 * @* The RootParamList interface lets React Navigation know about
 * @* the params accepted by your root navigator.
 * @* Here I extend the type AuthStackParamList because that's the
 * @* type of params for me stack navigator at the root.
 * @* The name of this type isn't important.
 * @* Specifying this type is important if you heavily use useNavigation,
 * @* Link etc. in your app since it'll ensure type-safety. It will also
 * @* make sure that you have correct nesting on the linking prop.
 */

import {NativeStackScreenProps} from '@react-navigation/native-stack';

export namespace NavigationModels {
  type DetailsParams = {
    cryptoID: string;
  };

  export enum MAIN_ROUTES_NAMES {
    HOME = 'Home',
    DETAILS = 'Details',
  }

  export type MainStackParamList = {
    [MAIN_ROUTES_NAMES.HOME]: undefined;
    [MAIN_ROUTES_NAMES.DETAILS]: DetailsParams;
  };

  export type RootStackParamList = MainStackParamList;

  export type RootStackScreenProps<T extends keyof RootStackParamList> =
    NativeStackScreenProps<RootStackParamList, T>;
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends NavigationModels.RootStackParamList {}
  }
}
