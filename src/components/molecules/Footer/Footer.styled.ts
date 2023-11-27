import styled from 'styled-components';

export const FooterText = styled.p`
  display: block;
  margin: 10px auto;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.jetBrainsFont};
  font-size: 12px;
`;

export const Container = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
`;
