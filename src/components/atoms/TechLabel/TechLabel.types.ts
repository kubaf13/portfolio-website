import type { ReactElement } from 'react';

export interface TechLabelProps {
  label: string;
  isYellow: boolean;
}

export type TechLabel = (props: TechLabelProps) => ReactElement;
