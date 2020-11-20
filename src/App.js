import React from 'react';
import styled from 'styled-components';
import { Switch, Route, Redirect } from 'react-router-dom';

import * as ROUTES from './utils/routes';
import useSpotify from './hooks/useSpotify';

import Home from './pages/Home';
import Search from './pages/Search';
import Login from './pages/Login';

import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';

const Main = styled.main`
  min-height: 100%;
  width: 100%;
  position: relative;
  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-columns: auto 1fr;
  grid-template-areas:
    'sidebar body'
    'footer footer';
`;

function App() {
  const spotify = useSpotify();

  if (!spotify.token) {
    return <Login />;
  }

  return (
    <Main>
      <Sidebar spotify={spotify} />

      <Switch>
        <Route exact path={ROUTES.HOME}>
          <Home spotify={spotify} />
        </Route>

        <Route path={ROUTES.SEARCH}>
          <Search spotify={spotify} />
        </Route>

        <Route path="*">
          <Redirect to={ROUTES.HOME} />
        </Route>
      </Switch>

      <Footer />
    </Main>
  );
}

export default App;
