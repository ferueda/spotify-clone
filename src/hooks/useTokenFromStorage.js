import * as React from 'react';
import { useHistory } from 'react-router-dom';

import { getTokenFromUrl } from '../services/spotify';

function useTokenFromStorage() {
  const [token, setToken] = React.useState(() => {
    const stored = window.localStorage.getItem('token');

    if (stored) {
      return JSON.parse(stored);
    }

    return null;
  });

  const history = useHistory();

  React.useEffect(() => {
    const hash = getTokenFromUrl();

    if (!token && hash) {
      history.replace('/');
      setToken(hash);
    }
  }, [history, token]);

  React.useEffect(() => {
    if (token === null) {
      window.localStorage.removeItem('token');
    } else {
      window.localStorage.setItem('token', JSON.stringify(token));
    }
  }, [token]);

  return [token, setToken];
}

export default useTokenFromStorage;
