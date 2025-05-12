import {PropsWithChildren} from 'react';
import {Props} from './models';

const Section = ({isVisible = false, children}: PropsWithChildren<Props>) => {
  if (!isVisible) {
    return null;
  }
  return <>{children}</>;
};

export default Section;
