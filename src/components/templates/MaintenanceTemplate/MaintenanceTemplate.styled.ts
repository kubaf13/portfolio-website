import styled from 'styled-components';

export const Heading = styled.h1`
  div > span {
    font-family: ${({ theme }) => theme.fonts.longCangFont};
  }

  .Typewriter__cursor {
    font-family: ${({ theme }) => theme.fonts.jetBrainsFont};
    color: rgba(255, 255, 255, 0.3);
    font-size: 80px;
    margin-left: -10px;
  }
`;
