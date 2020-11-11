import React from 'react';
import styled from 'styled-components';
import { useStateContext } from '../context/StateProvider';

import Body from '../components/Body/Body';

const Container = styled.div`
  width: 100%;
`;

function Home({ spotify }) {
  const [{ playlists }] = useStateContext();

  return (
    <Container>
      <Body spotify={spotify} playlists={playlists} />
    </Container>
  );
}

export default Home;
