import styled from 'styled-components';

export const DashedLine = styled.hr`
  border: none;
  height: 1px;
  width: 100%;
  background: repeating-linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.36),
    rgba(255, 255, 255, 0.36) 6px,
    transparent 6px,
    transparent 12px
  );
`;
