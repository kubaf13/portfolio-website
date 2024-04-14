import DashedLine from '@atoms/DashedLine';

import { Container } from './SectionTitle.styled';
import type { SectionTitle as SectionTitleType } from './SectionTitle.types';

export const SectionTitle: SectionTitleType = ({ title }) => (
  <Container>
    <h2>{title}</h2>
    <DashedLine />
  </Container>
);
