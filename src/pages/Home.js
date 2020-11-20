import React from 'react';
import styled from 'styled-components';

import Body from '../components/Body/Body';
import Header from '../components/Body/Header';
import PlaylistRow from '../components/Body/PlaylistRow';
import Loading from '../components/Loading';

const Container = styled.div`
  width: 100%;
`;

const RowsContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 32px;
`;

function Home({ spotify }) {
  const { isLoading, playlists, featured, topArtistsLong, topArtistsShort, newReleases } = spotify;

  return (
    <Container>
      <Body>
        <Header spotify={spotify} />

        {isLoading === true ? (
          <Loading />
        ) : (
          <RowsContainer>
            <PlaylistRow title="Recently played" playlists={playlists} />

            <PlaylistRow title="Your favorite artists" playlists={topArtistsLong} />

            <PlaylistRow title="Featured" playlists={featured} />

            <PlaylistRow title="Recently played artists" playlists={topArtistsShort} />

            <PlaylistRow title="New releases" playlists={newReleases} />
          </RowsContainer>
        )}
      </Body>
    </Container>
  );
}

export default Home;
