const express = require('express');
const axios = require('axios');
const querystring = require('querystring');

const { basic, TOKEN_ENDPOINT, USER_ENDPOINT, PLAYLISTS_ENDPOINT } = require('../config');

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

    const [{ data: user }, { data: playlistsData }] = await Promise.all([
      userPromise,
      playlistsPromise,
    ]);

    return res.status(200).json({ user: { ...user }, playlists: playlistsData.items });
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
