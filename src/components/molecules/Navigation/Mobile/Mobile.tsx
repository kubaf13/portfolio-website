import Link from '@atoms/Link';

import type { Navigation as NavigationType } from '../Navigation.types';
import { NavigationList, NavigationWrapper } from './Mobile.styled';

export const Mobile: NavigationType = ({ links }) => (
  <NavigationWrapper>
    <NavigationList>
      {links.map(link => (
        <li key={link.url}>
          <Link {...link} />
        </li>
      ))}
    </NavigationList>
  </NavigationWrapper>
);
