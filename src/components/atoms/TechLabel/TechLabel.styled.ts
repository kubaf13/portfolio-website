import styled from 'styled-components';

export const LabelWrapper = styled.span<{ isYellow: boolean }>`
  background: ${({ isYellow }) => (isYellow ? '#f0d546' : '#fff')};
  color: #266dce;
  padding: 10px 20px;
  border-radius: 10px;
`;
