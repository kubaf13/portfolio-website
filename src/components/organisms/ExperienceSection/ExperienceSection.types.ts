import type { JobPositionProps } from '@molecules/JobPosition';
import type { ReactElement } from 'react';

export interface ExperienceSectionProps {
  sectionTitle: string;
  companies: {
    companyName: string;
    jobs: JobPositionProps[];
  }[];
}

export type ExperienceSection = (props: ExperienceSectionProps) => ReactElement;
