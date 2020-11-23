import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 93px;
  height: 12px;
  display: flex;
  align-items: center;
`;

const Bar = styled.div`
  width: 100%;
  background-color: #535353;
  border-radius: 2px;
  position: relative;
  height: 4px;
`;

const Filler = styled.div`
  height: 4px;
  border-radius: 2px;
  background-color: ${({ theme, isActive }) => (isActive ? theme.color.mainGreen : '#b3b3b3')};
  width: ${({ volumeLevel }) => `${volumeLevel}px`};
`;

const VolumePointer = styled.div`
  background-color: #fff;
  border-radius: 50%;
  width: 12px;
  height: 12px;
  z-index: 100;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  opacity: ${({ volumeIsActive }) => (volumeIsActive ? 1 : 0)};

  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  margin-left: ${({ volumeLevel }) => `${volumeLevel - 6}px`};
`;

function ProgressBar({ volumeIsActive, setVolumeIsActive, volumeLevel, setVolumeLevel }) {
  const fillerRef = React.useRef(null);

  const handleWidth = (e) => {
    const pos = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - pos.left;

    setVolumeLevel(x);
  };
  return (
    <Container
      onClick={handleWidth}
      onMouseEnter={() => setVolumeIsActive(true)}
      onMouseLeave={() => setVolumeIsActive(false)}
    >
      <Bar>
        <Filler isActive={volumeIsActive} ref={fillerRef} volumeLevel={volumeLevel} />
        <VolumePointer volumeIsActive={volumeIsActive} volumeLevel={volumeLevel} />
      </Bar>
    </Container>
  );
}

export default ProgressBar;