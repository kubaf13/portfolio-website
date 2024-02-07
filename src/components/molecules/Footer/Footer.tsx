import type { ReactElement } from 'react';
import React from 'react';

import { Tag } from '@/styles/shared';

import { Container, FooterText } from './Footer.styled';

const currentYear = new Date().getFullYear();

export const Footer = (): ReactElement => (
  <Container>
    <FooterText>
      <Tag>{'<span>'}</Tag>iFlisek {currentYear}
      <Tag>{'</span>'}</Tag>
    </FooterText>
  </Container>
);
