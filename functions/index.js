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
  console.log(_err);
  res.status(500).send('Something went wrong.');
});

exports.api = functions.https.onRequest(app);
