import type { ReactElement } from 'react';

export interface SectionTitleProps {
  title: string;
}

export type SectionTitle = (props: SectionTitleProps) => ReactElement;
