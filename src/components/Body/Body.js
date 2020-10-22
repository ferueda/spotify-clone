import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import PlaylistRow from './PlaylistRow';

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 65px);
  overflow-y: auto;
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

const RowsContainer = styled.section`
  display: grid;
  grid-gap: 32px;
`;

const BodyInfo = styled.div``;
const Description = styled.div``;

function Body({ spotify }) {
  return (
    <Container>
      <Header spotify={spotify} />

      <RowsContainer>
        <PlaylistRow title="Shortcuts" />
        <PlaylistRow title="Recently played" />
        <PlaylistRow title="Your top shows" />
      </RowsContainer>
    </Container>
  );
}

export default Body;
