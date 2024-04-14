import { LabelWrapper } from '@atoms/TechLabel/TechLabel.styled';

import type { TechLabel as TechLabelType } from './TechLabel.types';

export const TechLabel: TechLabelType = ({ label, isYellow }) => (
  <LabelWrapper isYellow={isYellow}>{label}</LabelWrapper>
);
