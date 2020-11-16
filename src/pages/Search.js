import React from 'react';
import styled from 'styled-components';

import Body from '../components/Body/Body';
import Header from '../components/Body/Header';

const Container = styled.div`
  width: 100%;
`;

function Search({ spotify }) {
  return (
    <Container>
      <Body>
        <Header spotify={spotify} withSearch />
      </Body>
    </Container>
  );
}

export default Search;
