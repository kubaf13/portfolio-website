import Link from '@atoms/Link';

import type { Navigation as NavigationType } from './Navigation.types';

export const Navigation: NavigationType = ({ links }) => (
  <nav>
    <ul>
      {links.map(link => (
        <li key={link.url}>
          <Link {...link} />
        </li>
      ))}
    </ul>
  </nav>
);
