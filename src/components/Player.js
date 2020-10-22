import React from 'react';
import styled from 'styled-components';
import { useStateContext } from '../context/StateProvider';

import Body from './Body/Body';
import Sidebar from './Sidebar/Sidebar';
import Footer from './Footer/Footer';

const Container = styled.div``;
const PlayerBody = styled.div`
  display: flex;
`;

function Player({ spotify }) {
  const [{ playlists }] = useStateContext();
  // spotify.getMyRecentlyPlayedTracks().then((data) => console.log(data));
  console.log(playlists);
  return (
    <Container>
      <PlayerBody>
        <Sidebar playlists={playlists} />
        <Body spotify={spotify} />
      </PlayerBody>
      <Footer />
    </Container>
  );
}

export default Player;
