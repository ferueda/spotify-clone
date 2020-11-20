import React from 'react';
import styled from 'styled-components';

import Body from '../components/Body/Body';
import Header from '../components/Body/Header';
import PlaylistRow from '../components/Body/PlaylistRow';

const Container = styled.div`
  width: 100%;
`;

const RowsContainer = styled.section`
  display: grid;
  grid-gap: 32px;
`;

function Home({ spotify }) {
  const { playlists } = spotify;
  return (
    <Container>
      <Body>
        <Header spotify={spotify} />

        <RowsContainer>
          <PlaylistRow title="Recently played" playlists={playlists} />
        </RowsContainer>
      </Body>
    </Container>
  );
}

export default Home;
