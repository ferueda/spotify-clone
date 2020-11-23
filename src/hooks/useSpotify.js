import React from 'react';

import { getSpotify } from '../services/api';
import useTokenFromStorage from './useTokenFromStorage';

function useSpotify() {
  const [user, setUser] = React.useState(null);
  const [playlists, setPlaylists] = React.useState([]);
  const [featured, setFeatured] = React.useState([]);
  const [topArtistsLong, setTopArtistsLong] = React.useState([]);
  const [topArtistsShort, setTopArtistsShort] = React.useState([]);
  const [newReleases, setNewReleases] = React.useState([]);
  const [status, setStatus] = React.useState('idle');
  const [error, setError] = React.useState(null);

  const [token, setToken] = useTokenFromStorage();

  const isLoading = status === 'idle' || status === 'pending';

  React.useEffect(() => {
    setStatus('pending');
    setError(null);

    if (token) {
      getSpotify(token)
        .then((data) => {
          setUser(data.user);
          setPlaylists(data.playlists);
          setFeatured(data.featured);
          setTopArtistsLong(data.topArtistsLong);
          setTopArtistsShort(data.topArtistsShort);
          setNewReleases(data.newReleases);
          setStatus('resolved');
        })
        .catch((error) => {
          setError(error);
          setStatus('rejected');

          if (error.message === 'Unauthorized') {
            setToken(null);
          }
        });
    }
  }, [token, setToken]);

  return {
    user,
    playlists,
    featured,
    topArtistsLong,
    topArtistsShort,
    newReleases,
    error,
    isLoading,
    token,
    setToken,
  };
}

export default useSpotify;
