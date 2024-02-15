import type { LinkProps } from '@atoms/Link';
import type { ReactElement } from 'react';

export interface NavigationProps {
  links: LinkProps[];
}

export type Navigation = (props: NavigationProps) => ReactElement;
