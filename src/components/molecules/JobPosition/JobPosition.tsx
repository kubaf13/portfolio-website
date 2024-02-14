import TechLabel from '@atoms/TechLabel';

import {
  JobDescription,
  JobSummary,
  JobTitle,
  TechWrapper,
  Timeline,
  Wrapper,
} from './JobPosition.styled';
import type { JobPosition as JobPositionType } from './JobPosition.types';

export const JobPosition: JobPositionType = ({
  jobTitle,
  description,
  timeline,
  mainTechStack,
  otherTechStack,
}) => (
  <JobSummary>
    <Wrapper>
      <JobTitle>[{jobTitle}]</JobTitle>
      <Timeline>[{timeline}]</Timeline>
    </Wrapper>
    <JobDescription>{description}</JobDescription>
    <TechWrapper>
      {mainTechStack.map(tech => (
        <TechLabel key={tech.label} label={tech.label} isYellow={false} />
      ))}
      <TechLabel label={`+${otherTechStack.length}`} isYellow />
    </TechWrapper>
  </JobSummary>
);
