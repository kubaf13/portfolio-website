import { StyledLink } from './Link.styled';
import type { Link as LinkType } from './Link.types';

export const Link: LinkType = ({ label, ariaLabel, url, openInNewTab }) => (
  <StyledLink
    href={url}
    aria-label={ariaLabel}
    target={openInNewTab ? '_blank' : undefined}
  >
    {label}
  </StyledLink>
);
