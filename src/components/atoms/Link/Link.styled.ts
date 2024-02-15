import Link from 'next/link';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.palette.text};
  font-family: ${({ theme }) => theme.fonts.jetBrainsFont};
  font-size: 20px;
  font-weight: 300;
  text-decoration: none;
  position: relative;

  &:after {
    content: '';
    background: white;
    mix-blend-mode: exclusion;
    width: calc(100% + 14px);
    height: 0;
    position: absolute;
    bottom: -4px;
    left: -7px;
    transition: all 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95);

    &:hover {
      height: calc(100% + 8px);
    }
  }
`;
