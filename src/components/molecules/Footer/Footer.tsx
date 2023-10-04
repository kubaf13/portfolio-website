import React from 'react';

import { Tag } from '@/styles/shared';

import { Container, FooterText } from './Footer.styled';
import type { Footer as FooterType } from './Footer.types';

const currentYear = new Date().getFullYear();

export const Footer: FooterType = () => (
  <Container>
    <FooterText>
      <Tag>{'<span>'}</Tag>iFlisek {currentYear}
      <Tag>{'</span>'}</Tag>
    </FooterText>
  </Container>
);
