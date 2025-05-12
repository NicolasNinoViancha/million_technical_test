import {StyleProp, ViewStyle} from 'react-native';

export type Props = {
  containerStyle?: StyleProp<ViewStyle>;
  avatar?: string;
  email?: string;
  name?: string;
  portfolioUSD?: string;
  profitPercentage?: string;
  lastIncome?: string;
};
