import React from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import styled from 'styled-components';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';

import { getTokenFromUrl } from './services/spotify';
import { useStateContext } from './context/StateProvider';
import { actions } from './context/stateReducer';
import * as ROUTES from './utils/routes';

import Home from './pages/Home';
import Search from './pages/Search';
import Login from './pages/Login';

import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';

const spotify = new SpotifyWebApi();

const Main = styled.main`
  display: flex;
`;

function App() {
  const [{ accessToken }, dispatch] = useStateContext();
  const history = useHistory();

  React.useEffect(() => {
    const hash = getTokenFromUrl();
    history.push('/');

    const _token = hash.access_token;

    if (_token) {
      dispatch({ type: actions.SET_ACCESS_TOKEN, accessToken: _token });

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({ type: actions.SET_USER, user });
      });

      spotify.getUserPlaylists({ limit: 50 }).then((playlists) => {
        dispatch({ type: actions.SET_PLAYLISTS, playlists });
      });
    }
  }, [accessToken, dispatch, history]);

  if (accessToken === null || accessToken === undefined) {
    return <Login />;
  }

  return (
    <Main>
      <Sidebar />

      <Switch>
        <Route exact path={ROUTES.HOME}>
          <Home spotify={spotify} />
        </Route>

        <Route exact path={ROUTES.SEARCH}>
          <Search />
        </Route>
      </Switch>

      <Footer />
    </Main>
  );
}

export default App;
