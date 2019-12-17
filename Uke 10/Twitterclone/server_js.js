const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const secret = 'somethingsecret';

const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'twitterclone',
  password: 'password',
  port: 5432,
});

function getTweets() {
  return pool.query(`
    SELECT
      tweets.id,
      tweets.message,
      tweets.created_at,
      users.name,
      users.handle
    FROM
      tweets
    INNER JOIN users ON
      tweets.user_id = users.id
  `)
  .then(({ rows }) => rows);
}

function createTweet(message, userId) {
  return pool.query(`
    INSERT INTO tweets
      (message, user_id)
    VALUES
      ($1, $2)
    RETURNING
      *
  `, [message, userId])
  .then(({ rows }) => rows[0]);
}

function getUserByHandle(handle) {
  return pool.query(`
    SELECT * FROM users WHERE handle = $1
  `, [handle])
  .then(({ rows }) => rows[0]);
}

app.post('/session', async function (req, res) {
  const { handle, password } = req.body;
  const user = await getUserByHandle(handle);

  if (!user) {
    return res.status(401).send({ error: 'Unknown user' });
  }

  if (user.password !== password) {
    return res.status(401).send({ error: 'Wrong password' });
  }

  const token = jwt.sign({
    id: user.id,
    handle: user.handle,
    name: user.name
  }, new Buffer('somethingsecret', 'base64'));

  res.send({
    token: token
  });
});

function authenticate(req, res, next) {
  const token = req.headers['x-auth-token'];

  try {
    const { id, name, handle } = jwt.verify(
      token,
      new Buffer('somethingsecret', 'base64')
    );

    req.user = { id, name, handle };
    next();
  } catch (error) {
    res.status(401).send({
      error: 'Unable to authenticate - please use a valid token'
    });
  }
}

app.post('/tweets', authenticate, async function(req, res) {
  const { id } = req.user;
  const { message } = req.body;

  const newTweet = await createTweet(message, id);
  res.send(newTweet);
});

app.get('/tweets', async function (req, res) {
  const tweets = await getTweets();
  res.send(tweets);
});

app.listen(3000);
