import styled from 'styled-components';

export const NavigationList = styled.ul`
  display: flex;

  li {
    padding: 0 20px;
    position: relative;
    font-size: 16px;

    &::after {
      position: absolute;
      font-size: 20px;
      top: 0;
      right: -5px;
      content: '/';
      color: rgba(255, 255, 255, 0.27);
    }
  }
`;
