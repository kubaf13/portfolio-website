import type { LinkProps } from '@atoms/Link';
import type { ReactElement } from 'react';

import type { VIEWPORTS } from '@/consts/viewports';

export interface NavigationProps {
  links: LinkProps[];
}

export interface HookProps {
  viewportState: VIEWPORTS;
}

export type UseNavigation = () => HookProps;
export type Navigation = (props: NavigationProps) => ReactElement;
