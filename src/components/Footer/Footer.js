import React from 'react';
import styled from 'styled-components';

import VolumeControls from './VolumeControls';
import PlayerControls from './PlayerControls';

const Container = styled.div`
  position: fixed;
  grid-area: footer;
  display: flex;
  justify-content: space-between;
  bottom: 0;
  height: ${({ theme }) => theme.footer.height};
  width: 100%;
  min-width: 768px;
  background-color: ${({ theme }) => theme.color.player.footerBg};
  padding: 20px;
`;

const SongDetailsContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.lightGray};
  min-width: 300px;
`;

const AlbumImg = styled.img`
  height: 60px;
  width: 60px;
  margin-right: 20px;
  object-fit: contain;
`;

const Track = styled.p`
  color: white;
  font-size: 14px;
`;

const Artist = styled.p`
  font-size: 12px;
`;

function Footer({ spotify }) {
  const { recentlyPlayed } = spotify;

  const track = recentlyPlayed[0]?.track.name;
  const artist = recentlyPlayed[0]?.track.album.artists[0].name;
  const albumImg = recentlyPlayed[0]?.track.album.images[2].url;
  const album = recentlyPlayed[0]?.track.album.name;

  return (
    <Container>
      <SongDetailsContainer>
        {track ? (
          <>
            <AlbumImg src={albumImg} alt={`${album} album image`} />
            <div>
              <Track>{track}</Track>
              <Artist>{artist}</Artist>
            </div>
          </>
        ) : null}
      </SongDetailsContainer>

      <PlayerControls currentTrack={recentlyPlayed[0]} />

      <VolumeControls />
    </Container>
  );
}

export default Footer;
