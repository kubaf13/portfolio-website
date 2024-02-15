import TechLabel from '@atoms/TechLabel';

import {
  JobDescription,
  JobSummary,
  JobTitle,
  TechList,
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
      <Timeline>{timeline}</Timeline>
    </Wrapper>
    <JobDescription>{description}</JobDescription>
    <TechList>
      {mainTechStack.map(tech => (
        <li key={tech.label}>
          <TechLabel label={tech.label} isYellow={false} />
        </li>
      ))}
      <li>
        <TechLabel label={`+${otherTechStack.length}`} isYellow />
      </li>
    </TechList>
  </JobSummary>
);
