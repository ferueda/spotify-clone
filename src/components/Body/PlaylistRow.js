import React from 'react';
import styled from 'styled-components';
import { throttle } from 'throttle-debounce';

import PlaylistCard from './PlaylistCard';

const Container = styled.section``;

const CardContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 24px;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
`;

const Title = styled.h2`
  color: #fff;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 16px;
`;

const Link = styled.a`
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

function PlaylistRow({ title, playlists }) {
  const [screenWidth, setScreenWidth] = React.useState(() => window.innerWidth);

  React.useEffect(() => {
    const handleResize = throttle(100, () => setScreenWidth(window.innerWidth));

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const playlistsToShow = playlists.slice(0, Math.floor((screenWidth - 232) / (220 + 27)));

  return (
    <Container>
      <Title>
        <Link href="">{title}</Link>
      </Title>
      <CardContainer>
        {playlistsToShow.map((playlist) => (
          <PlaylistCard key={playlist.id} playlist={playlist} />
        ))}
      </CardContainer>
    </Container>
  );
}

export default PlaylistRow;
