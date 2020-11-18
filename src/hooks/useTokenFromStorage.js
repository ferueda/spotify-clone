import * as React from 'react';

function useTokenFromStorage() {
  const [token, setToken] = React.useState(() => {
    const stored = window.localStorage.getItem('token');

    if (stored) {
      return JSON.parse(stored);
    }

    return null;
  });

  React.useEffect(() => {
    if (token) {
      window.localStorage.setItem('token', JSON.stringify(token));
    }
  }, [token]);

  return [token, setToken];
}

export default useTokenFromStorage;
