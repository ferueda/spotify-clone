import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: ${({ theme }) => `calc(100vh - ${theme.footer.height})`};
  grid-area: body;
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
