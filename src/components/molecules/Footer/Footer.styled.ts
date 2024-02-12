import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaFileDownload } from 'react-icons/fa';
import styled, { css } from 'styled-components';

const iconProps = css`
  width: 30px;
  height: 30px;
  color: white;
`;

export const Container = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;

  @media ${({ theme }) => theme.media.tablet} {
    position: relative;
    max-width: ${({ theme }) => theme.media.maxWidth};
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: 10px 1fr;
    grid-column-gap: 0;
    grid-row-gap: 5px;
    grid-template-areas:
      'line line line line line line line'
      'div text text text text text icons';
  }
`;

export const FooterText = styled.p`
  grid-area: text;
  display: block;
  margin: 10px auto;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.jetBrainsFont};
  font-size: 12px;
`;

export const Div = styled.div`
  grid-area: div;
`;

export const SocialIcons = styled.div`
  grid-area: icons;
  margin: 10px auto;
  display: flex;
  justify-content: space-evenly;
  align-items: baseline;
  width: 50vw;

  @media ${({ theme }) => theme.media.tablet} {
    margin: unset;
    width: unset;
  }
`;

export const IconLink = styled(Link)`
  svg {
    transition: color 0.5s ease-in;

    &:hover,
    &:active {
      color: #f0d546;
    }
  }
`;

export const GithubIcon = styled(FaGithub)`
  ${iconProps}
`;

export const LinkedinIcon = styled(FaLinkedin)`
  ${iconProps}
`;

export const FileIcon = styled(FaFileDownload)`
  ${iconProps}
`;

export const HorizontalLine = styled.hr`
  grid-area: line;
  border: none;
  height: 1px;
  background: repeating-linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.36),
    rgba(255, 255, 255, 0.36) 6px,
    transparent 6px,
    transparent 12px
  );
`;
