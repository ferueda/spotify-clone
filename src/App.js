import React from 'react';
import SpotifyWebApi from 'spotify-web-api-js';

import { getTokenFromUrl } from './services/spotify';
import { useStateContext } from './context/StateProvider';
import { actions } from './context/stateReducer';

import Login from './components/Login';
import Player from './components/Player';

const spotify = new SpotifyWebApi();

function App() {
  const [{ accessToken }, dispatch] = useStateContext();

  React.useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';

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
  }, [accessToken, dispatch]);

  if (accessToken === null || accessToken === undefined) {
    return <Login />;
  }

  return <Player spotify={spotify} />;
}

export default App;
