import Link from 'next/link';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.palette.text};
  font-family: ${({ theme }) => theme.fonts.jetBrainsFont};
  font-size: 20px;
  font-weight: 300;
  text-decoration: none;
`;
