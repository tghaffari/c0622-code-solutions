require('dotenv/config');
const pg = require('pg');
const argon2 = require('argon2'); // eslint-disable-line
const express = require('express');
const ClientError = require('./client-error');
const errorMiddleware = require('./error-middleware');

const db = new pg.Pool({ // eslint-disable-line
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

const app = express();

const jsonMiddleware = express.json();

app.use(jsonMiddleware);

app.post('/api/auth/sign-up', (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new ClientError(400, 'username and password are required fields');
  }

  /* your code starts here */

  /**
   * Hash the user's password with `argon2.hash()`
   * Then, 😉
   *   Insert the user's "username" and "hashedPassword" into the "users" table.
   *   Then, 😉
   *     Respond to the client with a 201 status code and the new user's "userId", "username", and "createdAt" timestamp.
   *   Catch any errors.
   * Catch any errors.
   *
   * Hint: Insert statements can include a `returning` clause to retrieve the insterted row(s).
   */

  argon2
    .hash(password)
    .then(hashedPassword => {
      const sql = `
      insert into "users" ("username", "hashedPassword")
      values ($1, $2)
      returning "createdAt", "userId", "username"
      `;
      const params = [username, hashedPassword];

      db.query(sql, params)
        .then(result => {
          res.status(201).json(result.rows[0]);
        })
        .catch(err => {
          console.error(err);
          res.status(500).json({ error: 'An unexpected error occurred.' });
        });
    })
    .catch(err => {
      console.error(err);
    });

});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});
