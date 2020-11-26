const express = require('express');
const axios = require('axios');
const querystring = require('querystring');
const {
  basic,
  TOKEN_ENDPOINT,
  USER_ENDPOINT,
  PLAYLISTS_ENDPOINT,
  TOP_ARTISTS_LONG_ENDPOINT,
  TOP_ARTISTS_SHORT_ENDPOINT,
  FEATURED_ENDPOINT,
  NEW_RELEASES_ENDPOINT,
  RECENTLY_PLAYED_ENDPOINT,
} = require('../config');

const router = express.Router();

router.get('/', async (req, res, next) => {
  const refreshToken = req.query.refresh_token;

  if (!refreshToken) {
    return res.status(401).send('Access denied. No token provided');
  }

  const body = querystring.stringify({
    grant_type: 'refresh_token',
    refresh_token: refreshToken,
  });

  const options = {
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  };

  try {
    const { data: authData } = await axios.post(TOKEN_ENDPOINT, body, options);

    const accessToken = authData.access_token;
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    const userPromise = axios.get(USER_ENDPOINT, { headers });
    const playlistsPromise = axios.get(PLAYLISTS_ENDPOINT, { headers });
    const featuredPromise = axios.get(FEATURED_ENDPOINT, { headers });
    const topArtistsLongPromise = axios.get(TOP_ARTISTS_LONG_ENDPOINT, { headers });
    const topArtistsShortPromise = axios.get(TOP_ARTISTS_SHORT_ENDPOINT, { headers });
    const newReleasesPromise = axios.get(NEW_RELEASES_ENDPOINT, { headers });
    const recentlyPlayedPromise = axios.get(RECENTLY_PLAYED_ENDPOINT, { headers });

    const [
      { data: user },
      { data: playlistsData },
      { data: featuredData },
      { data: topArtistsLongData },
      { data: topArtistsShortData },
      { data: newReleasesData },
      { data: recentlyPlayedData },
    ] = await Promise.all([
      userPromise,
      playlistsPromise,
      featuredPromise,
      topArtistsLongPromise,
      topArtistsShortPromise,
      newReleasesPromise,
      recentlyPlayedPromise,
    ]);

    return res.status(200).json({
      user,
      playlists: playlistsData.items,
      featured: featuredData.playlists.items,
      topArtistsLong: topArtistsLongData.items,
      topArtistsShort: topArtistsShortData.items,
      newReleases: newReleasesData.albums.items,
      recentlyPlayed: recentlyPlayedData.items,
    });
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
