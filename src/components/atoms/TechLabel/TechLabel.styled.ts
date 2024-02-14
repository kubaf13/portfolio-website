import styled from 'styled-components';

export const LabelWrapper = styled.span<{ isYellow: boolean }>`
  background: ${({ isYellow }) => (isYellow ? '#f0d546' : '#fff')};
  color: #266dce;
  padding: 10px 15px;
  border-radius: 10px;
  -webkit-box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);

  @media ${({ theme }) => theme.media.tablet} {
    padding: 10px 20px;
  }
`;
