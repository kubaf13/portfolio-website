import type { UseNavigation } from '@molecules/Navigation/Navigation.types';
import { useContext } from 'react';

import AppContext from '@/contexts/AppContext';

export const useNavigation: UseNavigation = () => {
  const {
    state: { viewportState, menuIsActive },
  } = useContext(AppContext);

  return {
    viewportState,
    menuIsActive,
  };
};
