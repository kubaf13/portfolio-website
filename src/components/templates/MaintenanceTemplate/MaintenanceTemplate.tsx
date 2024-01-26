import Typewriter from 'typewriter-effect';

import { CenteringContainer, Message, Tag } from '@/styles/shared';

import { Heading } from './MaintenanceTemplate.styled';
import type { MaintenanceTemplate as MaintenanceTemplateType } from './MaintenanceTemplate.types';
export const MaintenanceTemplate: MaintenanceTemplateType = () => (
  <CenteringContainer>
    <Heading>
      <Typewriter
        onInit={typewriter => {
          typewriter
            .typeString('see you soon')
            .pauseFor(3500)
            .deleteAll()
            .start();
        }}
        options={{
          autoStart: true,
          loop: true,
        }}
      />
    </Heading>
    <Message>
      <Tag>{'<span> '}</Tag>
      page on maintenance
      <Tag>{' </span>'}</Tag>
    </Message>
  </CenteringContainer>
);
