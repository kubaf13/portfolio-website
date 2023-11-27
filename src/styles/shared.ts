import styled from 'styled-components';

export const Tag = styled.span`
  color: rgba(255, 255, 255, 0.5);
  font-family: 'JetBrains Light';
`;

export const CenteringContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  h1 {
    overflow: hidden;
    border-right: 0.05em solid rgba(255, 255, 255, 0.5);
    white-space: nowrap;
    margin: 0 auto;
    animation: typing 3s steps(10, end), blink-caret 1s infinite;

    @media ${({ theme }) => theme.media.desktop} {
      animation: typing-on-desktop 3s steps(10, end), blink-caret 1s infinite;
    }
  }

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 25%;
    }
  }

  @keyframes typing-on-desktop {
    from {
      width: 0;
    }
    to {
        width: 18%;
      }
    }
  }

  @keyframes blink-caret {
    0%,
    100% {
      border-color: transparent;
    }
    50% {
      border-color: rgba(255, 255, 255, 0.5);
    }
  }
`;

export const Message = styled.div`
  margin: 10px;
`;
