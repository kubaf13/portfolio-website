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
      transition: 0.3s ease-in-out;
    }

    &:hover {
      &::after {
        transition-delay: 0.35s;
        color: #f0d546;
      }
    }
  }
`;
