import type { TechLabelProps } from '@atoms/TechLabel';
import type { ReactElement } from 'react';

export interface JobPositionProps {
  jobTitle: string;
  description: string;
  timeline: string;
  mainTechStack: Pick<TechLabelProps, 'label'>[];
  otherTechStack: Pick<TechLabelProps, 'label'>[];
}

export type JobPosition = (props: JobPositionProps) => ReactElement;
