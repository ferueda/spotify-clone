import React from 'react';
import styled from 'styled-components';

import PlaylistCard from './PlaylistCard';

const Container = styled.section``;

const CardContainer = styled.div`
  display: grid;
  grid-auto-rows: 0;
  grid-template-rows: 1fr;
  grid-gap: 24px;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
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

function PlaylistRow({ title }) {
  return (
    <Container>
      <Title>
        <Link href="">{title}</Link>
      </Title>
      <CardContainer>
        <PlaylistCard />
        <PlaylistCard />
        <PlaylistCard />
        <PlaylistCard />
        <PlaylistCard />
        <PlaylistCard />
        <PlaylistCard />
      </CardContainer>
    </Container>
  );
}

export default PlaylistRow;
