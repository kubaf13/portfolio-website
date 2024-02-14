import styled from 'styled-components';

export const JobSummary = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media ${({ theme }) => theme.media.tablet} {
    flex-direction: row;
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

export const TechWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  @media ${({ theme }) => theme.media.tablet} {
    gap: 29px;
  }
`;

export const Timeline = styled.p`
  font-size: 14px;
  font-style: italic;
  font-weight: 200;
`;
