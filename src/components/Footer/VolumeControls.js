import React from 'react';
import styled from 'styled-components';

import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import { Grid } from '@material-ui/core';

import ProgressBar from './ProgressBar';

const Container = styled.div`
  display: flex;
  color: ${({ theme }) => theme.color.lightGray};
  align-items: center;
  justify-content: space-between;
  min-width: 300px;
  padding-left: 120px;
`;

const IconContainer = styled.div`
  color: ${({ active, theme }) => (active ? theme.color.darkGreen : theme.color.lightGray)};
  &:hover {
    color: ${({ active, theme }) => (active ? theme.color.mainGreen : theme.color.player.text)};
  }
`;

const ProgressBarContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100px;
`;

function VolumeControls() {
  const [volumeIsActive, setVolumeIsActive] = React.useState(false);
  const [volumeLevel, setVolumeLevel] = React.useState(50);

  const lastVolumeLevel = React.useRef(null);

  const handleVolumeIconClick = () => {
    if (volumeLevel !== 0) {
      return setVolumeLevel(0);
    }

    setVolumeLevel(lastVolumeLevel.current);
  };

  React.useEffect(() => {
    if (volumeLevel !== 0) {
      lastVolumeLevel.current = volumeLevel;
    }
  }, [volumeLevel]);

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item>
          <IconContainer>
            <PlaylistPlayIcon />
          </IconContainer>
        </Grid>

        <Grid item>
          <IconContainer
            onMouseEnter={() => setVolumeIsActive(true)}
            onMouseLeave={() => setVolumeIsActive(false)}
            onClick={handleVolumeIconClick}
          >
            {volumeLevel === 0 ? (
              <VolumeOffIcon />
            ) : volumeLevel <= 50 ? (
              <VolumeDownIcon />
            ) : (
              <VolumeUpIcon />
            )}
          </IconContainer>
        </Grid>

        <Grid item xs>
          <ProgressBarContainer>
            <ProgressBar
              isActive={volumeIsActive}
              setIsActive={setVolumeIsActive}
              level={volumeLevel}
              setLevel={setVolumeLevel}
              width={93}
            />
          </ProgressBarContainer>
        </Grid>
      </Grid>
    </Container>
  );
}

export default VolumeControls;
