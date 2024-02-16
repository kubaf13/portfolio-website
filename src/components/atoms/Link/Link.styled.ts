import Link from 'next/link';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.palette.text};
  font-family: ${({ theme }) => theme.fonts.jetBrainsFont};
  font-size: 20px;
  font-weight: 300;
  text-decoration: none;
  position: relative;
  transition-delay: 0.5s;
  transition: color 0.5s ease-in-out;

  //&:after {
  //  content: '';
  //  background: white;
  //  mix-blend-mode: exclusion;
  //  width: calc(100% + 14px);
  //  height: 0;
  //  position: absolute;
  //  bottom: -4px;
  //  left: -7px;
  //  transition: all 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  //}
  //
  //&:hover {
  //  &::after {
  //    height: calc(100% + 8px);
  //  }
  //}
  &:focus {
    color: #f0d546;
  }

  &:after {
    position: absolute;
    content: '';
    width: 0;
    height: 2px;
    bottom: -3px;
    left: 0;
    background: #f0d546;
    transition: 0.5s ease-in-out;
  }

  &:hover {
    color: #f0d546;

    &::after {
      content: '';
      width: 100%;
    }
  }
`;
