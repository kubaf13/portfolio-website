import styled from 'styled-components';

export const NavigationWrapper = styled.nav`
  background: white;
  border-radius: 10px;
  width: 90dvw;
  height: 75dvh;
`;

export const NavigationList = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  li {
    padding: 0 20px;
    position: relative;
    font-size: 16px;

    a {
      color: #266dce;

      &:hover {
        color: #266dce;
      }
    }
  }
`;
