import Link from '@atoms/Link';
import { NavigationList } from '@molecules/Navigation/Desktop/Desktop.styled';

import type { Navigation as NavigationType } from '../Navigation.types';

export const Desktop: NavigationType = ({ links }) => (
  <nav>
    <NavigationList>
      {links.map(link => (
        <li key={link.url}>
          <Link {...link} />
        </li>
      ))}
    </NavigationList>
  </nav>
);
