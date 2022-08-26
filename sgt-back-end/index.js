const express = require('express');
const app = express();
const pg = require('pg');
app.use(express.json());

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/grades', (req, res) => {
  const sql = `
  select *
    from "grades"
  `;

  db.query(sql)
    .then(result => {
      const grade = result.rows;
      res.status(200).json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.post('/api/grades', (req, res) => {
  const name = (req.body.name);
  const course = (req.body.course);
  const score = Number((req.body.score));

  if (Object.keys(req.body).length !== 3) {
    res.status(400).json({ error: 'The grade object requires three properties: name, course, and score' });
  } else if (name === undefined) {
    res.status(400).json({ error: 'Please include a name' });
  } else if (course === undefined) {
    res.status(400).json({ error: 'Please include a course' });
  } else if (score === undefined) {
    res.status(400).json({ error: 'Please include a score' });
  } else if (!Number.isInteger(score) || score < 0 || score > 100) {
    res.status(400).json({ error: 'score must be a positive integer from 0-100.' });
  } else {
    const sql = `
    insert into "grades" ("name", "course", "score")
    values ($1, $2, $3)
    returning *
  `;

    const params = [name, course, score];

    db.query(sql, params)
      .then(result => {
        res.status(201).json(result.rows[0]);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
      });
  }
});

app.put('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  const name = (req.body.name);
  const course = (req.body.course);
  const score = Number(req.body.score);
  if (!Number.isInteger(gradeId) || gradeId < 0) {
    res.status(400).json({ error: 'gradeId must be a positive integer' });
  } else if (Object.keys(req.body).length !== 3) {
    res.status(400).json({ error: 'The grade object requires three properties: name, course, and score' });
  } else if (name === undefined) {
    res.status(400).json({ error: 'Please include a name' });
  } else if (course === undefined) {
    res.status(400).json({ error: 'Please include a course' });
  } else if (score === undefined) {
    res.status(400).json({ error: 'Please include a score' });
  } else if (!Number.isInteger(score) || score < 0 || score > 100) {
    res.status(400).json({ error: 'score must be a positive integer from 0-100.' });
  } else {
    const sql = `
      update "grades"
      set
        "name" = $1,
        "course" = $2,
        "score" = $3
      where "gradeId" = $4
      returning *
    `;

    const params = [name, course, score, gradeId];

    db.query(sql, params)
      .then(result => {
        const updatedGrade = result.rows[0];
        if (!updatedGrade) {
          res.status(404).json({ error: `Cannot find a grade with gradeId ${gradeId}` });

        } else {
          res.json(updatedGrade);
        }
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error ocurred' });
      });
  }
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId < 0) {
    res.status(400).json({ error: 'gradeId must be a positive integer' });
  } else {
    const sql = `
      delete from "grades"
      where "gradeId" = $1
      returning *
    `;

    const params = [gradeId];

    db.query(sql, params)
      .then(result => {
        const deletedGrade = result.rows[0];
        if (!deletedGrade) {
          res.status(404).json({ error: `Cannot find grade with gradeId ${gradeId}` });
        } else {
          res.sendStatus(204);
        }
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred' });
      });
  }
}
);

app.listen(3000, (req, res) => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
}
);
