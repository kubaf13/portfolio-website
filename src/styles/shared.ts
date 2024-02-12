import styled from 'styled-components';

export const Tag = styled.span`
  color: rgba(255, 255, 255, 0.3);
  font-family: ${({ theme }) => theme.fonts.jetBrainsFont};
  font-weight: 300;
`;

export const CenteringContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: calc(100vh - 95px);

  @media ${({ theme }) => theme.media.tablet} {
    height: calc(100vh - 55px);
  }
`;

export const Message = styled.p`
  margin: 10px;
  font-size: 12px;

  @media ${({ theme }) => theme.media.tablet} {
    font-size: 16px;
  }
`;
