import React from 'react';
import styled from 'styled-components';

import PlaylistCard from './PlaylistCard';

const Container = styled.section``;

const CardContainer = styled.div`
  display: grid;
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

function PlaylistGrid({ title, playlists }) {
  return (
    <Container>
      <Title>
        <Link href="">{title}</Link>
      </Title>
      <CardContainer>
        {playlists.map((playlist) => (
          <PlaylistCard key={playlist.id} playlist={playlist} />
        ))}
      </CardContainer>
    </Container>
  );
}

export default PlaylistGrid;
