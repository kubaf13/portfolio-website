import type { ReactElement } from 'react';
import React from 'react';

import { Tag } from '@/styles/shared';

import { Container, FooterText, HorizontalLine } from './Footer.styled';

const currentYear = new Date().getFullYear();

export const Footer = (): ReactElement => (
  <Container>
    <HorizontalLine />
    <FooterText>
      <Tag>{'<span>'}</Tag>iFlisek {currentYear}
      <Tag>{'</span>'}</Tag>
    </FooterText>
  </Container>
);
