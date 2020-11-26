import React from 'react';
import styled from 'styled-components';
import { throttle } from 'throttle-debounce';

const Container = styled.div`
  width: ${({ width }) => `${width}px`};
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
  width: ${({ level }) => `${level}px`};
`;

const VolumePointer = styled.div`
  background-color: #fff;
  border-radius: 50%;
  width: 12px;
  height: 12px;
  z-index: 100;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};

  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  margin-left: ${({ level }) => `${level - 6}px`};
`;

function ProgressBar({ isActive, setIsActive, level, setLevel, width }) {
  const fillerRef = React.useRef(null);
  const ghostImageRef = React.useRef(new Image());
  ghostImageRef.current.src =
    'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=';

  const handleWidth = (e) => {
    const pos = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - pos.left;

    setLevel(x);
  };

  const handleDrag = React.useCallback(
    throttle(
      1,
      (e) => {
        e.preventDefault();

        const pos = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - pos.left;

        setLevel((prev) => {
          const newVolume = prev + x;

          if (newVolume < 0) {
            return prev;
          }

          if (newVolume > width) {
            return width;
          }

          return prev + x;
        });
      },
      [setLevel, width],
    ),
  );

  return (
    <Container
      onClick={handleWidth}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      width={width}
    >
      <Bar>
        <Filler isActive={isActive} ref={fillerRef} level={level} />
        <VolumePointer
          isActive={isActive}
          level={level}
          draggable
          onDragStart={(e) => {
            e.dataTransfer.setDragImage(ghostImageRef.current, 0, 0);
          }}
          onDrag={handleDrag}
        />
      </Bar>
    </Container>
  );
}

export default ProgressBar;
