import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 60px;
  height: 15px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`;

const Ball = styled.div`
  will-change: transform;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.lightGray};
  position: absolute;
  animation: grow 650ms ease-in-out infinite alternate;

  @keyframes grow {
    to {
      transform: translateX(-50%) scale(0);
    }
  }
`;

const Ball1 = styled(Ball)`
  left: 0;
  transform-origin: 100% 50%;
`;
const Ball2 = styled(Ball)`
  left: 50%;
  transform: translateX(-50%) scale(1);
  animation-delay: 0.33s;
`;
const Ball3 = styled(Ball)`
  right: 0;
  animation-delay: 0.66s;
`;

function Loading() {
  return (
    <Container>
      <Ball1></Ball1>
      <Ball2></Ball2>
      <Ball3></Ball3>
    </Container>
  );
}

export default Loading;
