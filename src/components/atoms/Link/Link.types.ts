import type { ReactElement } from 'react';

export interface LinkProps {
  url: string;
  ariaLabel: string;
  label: string;
  openInNewTab: boolean;
}

export type Link = (props: LinkProps) => ReactElement;
