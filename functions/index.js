const functions = require('firebase-functions');
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const { clientSecret, clientId } = require('./config');

const app = express();

app.use(cors({ origin: true }));

app.get('/auth', async (req, res) => {
  const code = req.query.code;

  if (!code) {
    res.redirect('http://localhost:3000/');
  }

  const body = `grant_type=authorization_code&code=${code}&redirect_uri=${decodeURIComponent(
    'http://localhost:5001/spotify-clone-88dae/us-central1/api/auth/',
  )}&client_id=${clientId}&client_secret=${clientSecret}`;

  try {
    const { data } = await axios.post('https://accounts.spotify.com/api/token', body);

    res.redirect(
      `http://localhost:3000/#access_token=${data.access_token}&token_type=Bearer&expires_in=3600`,
    );
  } catch (error) {
    console.error(error);
  }
});

exports.api = functions.https.onRequest(app);
