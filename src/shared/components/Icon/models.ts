import {FONTAWESOME_ICONS} from './constants';

type IconName = keyof typeof FONTAWESOME_ICONS;

export type Props = {
  name?: IconName;
  size?: number;
  color?: string;
};
