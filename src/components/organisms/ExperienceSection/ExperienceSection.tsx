import JobPosition from '@molecules/JobPosition';

import {
  CompanyName,
  ExperienceElement,
  ExperienceList,
  Job,
  JobsList,
  Line,
} from './ExperienceSection.styled';
import type { ExperienceSection as ExperienceSectionType } from './ExperienceSection.types';

export const ExperienceSection: ExperienceSectionType = ({
  companies,
  sectionTitle,
}) => (
  <section>
    <h2>{sectionTitle}</h2>
    <ExperienceList>
      {companies.map(company => (
        <ExperienceElement key={company.companyName}>
          <CompanyName>[{company.companyName}]</CompanyName>
          <JobsList>
            {company.jobs.map(jobPosition => (
              <Job key={jobPosition.timeline}>
                <Line />
                <JobPosition {...jobPosition} />
              </Job>
            ))}
          </JobsList>
        </ExperienceElement>
      ))}
    </ExperienceList>
  </section>
);
