import React from 'react';
import styled from 'styled-components';

import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';

import ProgressBar from './ProgressBar';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 100px;
`;

const IconContainer = styled.div`
  font-size: 18px;
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

const ControlsContainer = styled.div`
  display: flex;
  color: ${({ theme }) => theme.color.lightGray};
  align-items: center;
  justify-content: space-between;
  width: 200px;
`;

const BarContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
`;

const ProgressTime = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: normal;
  text-transform: none;
  min-width: 40px;
  text-align: center;
  color: #b3b3b3;
  cursor: default;
`;

function getMinutesFromMs(ms) {
  return String(Math.floor(ms / 60 / 1000));
}

function getSecondsFromMs(ms) {
  const seconds = Math.floor(((ms / 60 / 1000) % 1) * 60);
  if (seconds < 10) {
    return `0${seconds}`;
  } else {
    return String(seconds);
  }
}

function PlayerControls({ currentTrack }) {
  const [playerIsActive, setPlayerIsActive] = React.useState(false);
  const [playerLevel, setPlayerLevel] = React.useState(0);
  const playerWidth = 650;

  const lastPlayLevel = React.useRef(null);

  const handleVolumeIconClick = () => {
    if (playerLevel !== 0) {
      return setPlayerLevel(0);
    }

    setPlayerLevel(lastPlayLevel.current);
  };

  React.useEffect(() => {
    if (playerLevel !== 0) {
      lastPlayLevel.current = playerLevel;
    }
  }, [playerLevel]);

  const songLength = {
    inMs: currentTrack?.track.duration_ms,
    minutes: getMinutesFromMs(currentTrack?.track.duration_ms),
    seconds: getSecondsFromMs(currentTrack?.track.duration_ms),
  };

  return (
    <Container>
      <ControlsContainer>
        <IconContainer>
          <ShuffleIcon fontSize="inherit" />
        </IconContainer>

        <IconContainer>
          <SkipPreviousIcon fontSize="inherit" />
        </IconContainer>

        <PlayIconContainer>
          <PlayCircleOutlineIcon fontSize="large" />
        </PlayIconContainer>

        <IconContainer>
          <SkipNextIcon fontSize="inherit" />
        </IconContainer>

        <IconContainer>
          <RepeatIcon fontSize="inherit" />
        </IconContainer>
      </ControlsContainer>

      {currentTrack ? (
        <BarContainer>
          <ProgressTime>
            {getMinutesFromMs((playerLevel / playerWidth) * songLength.inMs)}:
            {getSecondsFromMs((playerLevel / playerWidth) * songLength.inMs)}
          </ProgressTime>
          <ProgressBar
            isActive={playerIsActive}
            setIsActive={setPlayerIsActive}
            level={playerLevel}
            setLevel={setPlayerLevel}
            width={playerWidth}
          />
          <ProgressTime>
            {songLength.minutes}:{songLength.seconds}
          </ProgressTime>
        </BarContainer>
      ) : null}
    </Container>
  );
}

export default PlayerControls;
