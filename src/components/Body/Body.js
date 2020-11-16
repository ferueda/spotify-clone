import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 65px);
  overflow-y: scroll;
  color: ${({ theme }) => theme.color.player.text};
  background: ${({ theme }) => theme.color.player.bodyBg};
  padding: 30px;

  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: ${({ theme }) => theme.color.player.bodyBg};
  }

  &::-webkit-scrollbar {
    width: 8px;
    background-color: ${({ theme }) => theme.color.player.bodyBg};
  }

  &::-webkit-scrollbar-thumb {
    padding: 1px;
    border-radius: 100px;
    background: rgba(255, 255, 255, 0.3);
  }
`;

function Body({ children }) {
  return <Container>{children}</Container>;
}

export default Body;
