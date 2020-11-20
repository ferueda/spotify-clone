import React from 'react';
import { getSpotify } from '../services/api';

function useSpotify(token) {
  const [user, setUser] = React.useState(null);
  const [playlists, setPlaylists] = React.useState([]);
  const [status, setStatus] = React.useState('idle');
  const [error, setError] = React.useState(null);

  const isLoading = status === 'idle' || status === 'pending';

  React.useEffect(() => {
    setStatus('pending');
    setError(null);

    if (token) {
      getSpotify(token)
        .then((data) => {
          setUser(data.user);
          setPlaylists(data.playlists);
          setStatus('resolved');
        })
        .catch((error) => {
          setError(error);
          setStatus('rejected');
        });
    }
  }, [token]);

  return {
    user,
    playlists,
    error,
    isLoading,
  };
}

export default useSpotify;
