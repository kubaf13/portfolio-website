import JobPosition from '@molecules/JobPosition';
import { Fragment } from 'react';

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
          <CompanyName>{company.companyName}</CompanyName>
          <JobsList>
            {company.jobs.map(jobPosition => (
              <Fragment key={jobPosition.timeline}>
                <Job>
                  <Line />
                  <JobPosition {...jobPosition} />
                </Job>
              </Fragment>
            ))}
          </JobsList>
        </ExperienceElement>
      ))}
    </ExperienceList>
  </section>
);
