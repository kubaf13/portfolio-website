import Link from '@atoms/Link';

import type { Navigation as NavigationType } from '../Navigation.types';
import { NavigationList } from './Desktop.styled';

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
