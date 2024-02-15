import styled from 'styled-components';

export const JobSummary = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, auto);
  grid-row-gap: 10px;

  @media ${({ theme }) => theme.media.tablet} {
    grid-template-columns: repeat(2, auto) 2fr;
    grid-template-rows: 1fr;
    grid-column-gap: 20px;
    justify-items: center;
    align-items: center;
  }
`;

export const JobTitle = styled.h4`
  color: #f0d546;
  text-transform: uppercase;
  font-size: 20px;

  @media ${({ theme }) => theme.media.tablet} {
    font-size: 25px;
  }
`;

export const JobDescription = styled.p`
  font-size: 14px;
  line-height: 2;
  color: #fafcfe;

  @media ${({ theme }) => theme.media.tablet} {
    font-size: 20px;
  }
`;

export const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  li {
    list-style: none;
  }

  @media ${({ theme }) => theme.media.tablet} {
    gap: 29px;
  }
`;

export const Timeline = styled.p`
  font-size: 14px;
  font-style: italic;
  font-weight: 200;
`;
