import React from 'react';
import styled from 'styled-components';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';

import useTokenFromStorage from './hooks/useTokenFromStorage';

import { getTokenFromUrl } from './services/spotify';
import * as ROUTES from './utils/routes';

import Home from './pages/Home';
import Search from './pages/Search';
import Login from './pages/Login';

import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import useSpotify from './hooks/useSpotify';

const Main = styled.main`
  display: flex;
`;

function App() {
  const [token, setToken] = useTokenFromStorage();
  const history = useHistory();
  const spotify = useSpotify(token);

  //TODO: move the below useEffect into useToken and call useToken hook from useSpotify and return token from useSpotify

  React.useEffect(() => {
    const hash = getTokenFromUrl();

    if (!token && hash) {
      const _token = hash;
      history.replace('/');

      if (_token) {
        setToken(_token);
      }
    }
  }, [token, setToken, history]);

  if (!token) {
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
