import DashedLine from '@atoms/DashedLine';
import styled from 'styled-components';

export const ExperienceList = styled.ul`
  position: relative;
  overflow: hidden;
`;

export const ExperienceElement = styled.li`
  display: flex;
  flex-direction: column;
`;

export const CompanyName = styled.h3`
  font-family: ${({ theme }) => theme.fonts.jetBrainsFont};
`;

export const JobsList = styled.ul`
  margin-left: 125px;
  position: relative;
  height: 100%;
`;

export const Job = styled.li`
  position: relative;
  margin-block: 70px;

  &:before {
    content: '';
    width: 20px;
    height: 20px;
    border-radius: 50%;
    position: absolute;
    top: 5px;
    left: -80px;
    background: white;
  }

  &:after {
    content: '';
    border: none;
    height: 130%;
    width: 1px;
    position: absolute;
    top: 5px;
    left: -70px;
    background: repeating-linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.36),
      rgba(255, 255, 255, 0.36) 6px,
      transparent 6px,
      transparent 12px
    );
  }
`;

export const Line = styled(DashedLine)`
  position: absolute;
  top: 15px;
  left: -80px;
  width: 80px;
`;
