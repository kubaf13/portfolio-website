import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  display: flex;

  img {
    margin: 10px auto;
    height: 50px;

    @media ${({ theme }) => theme.media.tablet} {
      margin-left: 10px;
      height: 60px;
    }
  }
`;
