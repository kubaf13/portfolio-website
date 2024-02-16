import { Mobile } from '@molecules/Navigation/Mobile/Mobile';

import { VIEWPORTS } from '@/consts/viewports';

import { Desktop } from './Desktop/Desktop';
import { useNavigation } from './Navigation.hook';
import type { Navigation as NavigationType } from './Navigation.types';

export const Navigation: NavigationType = ({ links }) => {
  const { viewportState } = useNavigation();
  if (viewportState === VIEWPORTS.DESKTOP) {
    return <Desktop links={links} />;
  }

  return <Mobile links={links} />;
};
