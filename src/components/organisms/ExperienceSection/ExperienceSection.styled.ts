import DashedLine from '@atoms/DashedLine';
import styled from 'styled-components';

export const ExperienceList = styled.ul`
  position: relative;
  overflow: hidden;
  //border: 1px solid white;
`;

export const ExperienceElement = styled.li`
  display: flex;
  flex-direction: column;
`;

export const CompanyName = styled.h3`
  text-transform: uppercase;
  margin-top: 20px;
  font-size: 20px;

  @media ${({ theme }) => theme.media.tablet} {
    margin-top: 50px;
  }
`;

export const JobsList = styled.ul`
  margin-left: 40px;
  position: relative;

  @media ${({ theme }) => theme.media.tablet} {
    margin-left: 125px;
  }
`;

export const Job = styled.li`
  position: relative;
  margin-block: 50px;

  &:before {
    content: '';
    width: 20px;
    height: 20px;
    border-radius: 50%;
    position: absolute;
    top: 3px;
    left: -35px;
    background: white;
  }

  &:after {
    content: '';
    border: none;
    height: 145%;
    width: 1px;
    position: absolute;
    top: 5px;
    left: -25px;
    background: repeating-linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.36),
      rgba(255, 255, 255, 0.36) 6px,
      transparent 6px,
      transparent 12px
    );
  }

  @media ${({ theme }) => theme.media.tablet} {
    margin-block: 100px;

    &:before {
      content: '';
      top: 5px;
      left: -80px;
    }

    &:after {
      content: '';
      top: 5px;
      left: -70px;
    }
  }
`;

export const Line = styled(DashedLine)`
  position: absolute;
  top: 13px;
  left: -20px;
  width: 20px;

  @media ${({ theme }) => theme.media.tablet} {
    top: 15px;
    left: -80px;
    width: 80px;
  }
`;
