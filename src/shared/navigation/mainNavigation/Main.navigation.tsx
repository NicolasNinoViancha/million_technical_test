import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '@home/presenter/screens';
import {DetailsScreen} from '@details/presenter/screens';
import {NavigationModels} from '../models';
import {SCREEN_OPTIONS} from './constants';

const Stack = createNativeStackNavigator<NavigationModels.MainStackParamList>();

const MainNavigation = () => (
  <Stack.Navigator screenOptions={SCREEN_OPTIONS}>
    <Stack.Screen
      name={NavigationModels.MAIN_ROUTES_NAMES.HOME}
      component={HomeScreen}
    />
    <Stack.Screen
      name={NavigationModels.MAIN_ROUTES_NAMES.DETAILS}
      component={DetailsScreen}
    />
  </Stack.Navigator>
);

export default MainNavigation;
