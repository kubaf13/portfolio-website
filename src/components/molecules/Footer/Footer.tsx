import Link from 'next/link';
import type { ReactElement } from 'react';
import React from 'react';

import { Tag } from '@/styles/shared';

import {
  Container,
  FileIcon,
  FooterText,
  GithubIcon,
  HorizontalLine,
  IconLink,
  LinkedinIcon,
  SocialIcons,
} from './Footer.styled';

const currentYear = new Date().getFullYear();

export const Footer = (): ReactElement => (
  <Container>
    <SocialIcons>
      <IconLink
        href="https://github.com/kubaf13"
        target="_blank"
        aria-label="Go to my Github profile"
      >
        <GithubIcon />
      </IconLink>
      <Link
        href="https://www.linkedin.com/in/jakub-flis-789785178/"
        target="_blank"
        aria-label="Go to my LinkedIn profile"
      >
        <LinkedinIcon />
      </Link>
      <Link href="/static/CV.pdf" download>
        <FileIcon />
      </Link>
    </SocialIcons>
    <HorizontalLine />
    <FooterText>
      <Tag>{'<span>'}</Tag>iFlisek {currentYear}
      <Tag>{'</span>'}</Tag>
    </FooterText>
  </Container>
);
