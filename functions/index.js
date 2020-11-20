const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const spotify = require('./routes/spotify');
const auth = require('./routes/auth');

const app = express();

app.use(cors({ origin: true }));
app.use(helmet());

if (app.get('env') === 'development') {
  app.use(morgan('tiny'));
}

app.use('/auth', auth);
app.use('/spotify', spotify);

app.use((_err, req, res, next) => {
  if (_err.response.data.error === 'invalid_grant') {
    return res
      .status(401)
      .json({ error: _err.response.data.error, description: _err.response.data.error_description });
  }

  return res.status(500).send('Something went wrong.');
});

exports.api = functions.https.onRequest(app);
