import type { ReactElement } from 'react';

import { Wrapper } from './Header.styled';

export const Header = (): ReactElement => (
  <Wrapper>
    <img src="/images/Logo.svg" alt="iFlisek Logo" />
  </Wrapper>
);
