import React from 'react';
import styled from 'styled-components';

import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import { Grid, Slider } from '@material-ui/core';

const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  bottom: 0;
  height: 65px;
  width: 100%;
  min-width: 768px;
  background-color: ${({ theme }) => theme.color.player.footerBg};
  padding: 20px;
`;

const SongDetailsContainer = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.lightGray};
  width: 300px;
`;

const PlayerControls = styled.div`
  flex: 0.4;
  display: flex;
  padding: 0 100px;
  color: ${({ theme }) => theme.color.lightGray};
  align-items: center;
  justify-content: space-between;
  width: 300px;
`;

const VolumeControls = styled.div`
  display: flex;
  color: ${({ theme }) => theme.color.lightGray};
  align-items: center;
  justify-content: space-between;
  min-width: 220px;
`;

const IconContainer = styled.div`
  color: ${({ active, theme }) => (active ? theme.color.darkGreen : theme.color.lightGray)};
  &:hover {
    color: ${({ active, theme }) => (active ? theme.color.mainGreen : theme.color.player.text)};
  }
`;

const PlayIconContainer = styled(IconContainer)`
  transition-duration: 200ms;
  &:hover {
    transform: scale(1.1);
  }
`;

const SliderContainer = styled.div`
  max-width: 95px;
`;

const AlbumImg = styled.img`
  height: 60px;
  width: 60px;
  margin-right: 20px;
  object-fit: contain;
`;

const AlbumText = styled.p`
  color: white;
  font-size: 14px;
`;

const ArtistText = styled.p`
  font-size: 12px;
`;

function Footer() {
  return (
    <Container>
      <SongDetailsContainer>
        <AlbumImg src="" alt="" />
        <div>
          <AlbumText>Album</AlbumText>
          <ArtistText>Singer</ArtistText>
        </div>
      </SongDetailsContainer>

      <PlayerControls>
        <IconContainer>
          <ShuffleIcon />
        </IconContainer>
        <IconContainer>
          <SkipPreviousIcon />
        </IconContainer>
        <PlayIconContainer>
          <PlayCircleOutlineIcon fontSize="large" />
        </PlayIconContainer>
        <IconContainer>
          <SkipNextIcon />
        </IconContainer>
        <IconContainer>
          <RepeatIcon />
        </IconContainer>
      </PlayerControls>

      <VolumeControls>
        <Grid container spacing={2}>
          <Grid item>
            <IconContainer>
              <PlaylistPlayIcon />
            </IconContainer>
          </Grid>
          <Grid item>
            <IconContainer>
              <VolumeDownIcon />
            </IconContainer>
          </Grid>
          <Grid item xs>
            <SliderContainer>
              <Slider aria-labelledby="continuous-slider" />
            </SliderContainer>
          </Grid>
        </Grid>
      </VolumeControls>
    </Container>
  );
}

export default Footer;
