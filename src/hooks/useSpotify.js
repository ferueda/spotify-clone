import React from 'react';

function useSpotify(token, setToken) {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    if (token) {
      fetch('https://api.spotify.com/v1/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          if (res.status === 200) {
            return res.json();
          } else {
            throw new Error();
          }
        })
        .then((data) => setUser(data))
        .catch(() => {
          setToken(null);
        });
    }
  }, [token, setToken]);

  return {
    user,
  };
}

export default useSpotify;
