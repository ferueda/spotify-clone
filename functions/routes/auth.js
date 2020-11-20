const express = require('express');
const axios = require('axios');
const querystring = require('querystring');

const { VIEW_REDIRECT, API_REDIRECT, basic, TOKEN_ENDPOINT } = require('../config');

const router = express.Router();

router.get('/', async (req, res, next) => {
  const code = req.query.code;

  if (!code) {
    return res.redirect(VIEW_REDIRECT);
  }

  const body = querystring.stringify({
    grant_type: 'authorization_code',
    code,
    redirect_uri: API_REDIRECT,
  });

  const options = {
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  };

  try {
    const { data } = await axios.post(TOKEN_ENDPOINT, body, options);

    return res.redirect(`${VIEW_REDIRECT}#token=${data.refresh_token}`);
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
