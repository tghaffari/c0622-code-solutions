/* eslint-disable no-console */
const express = require('express');
const app = express();

let nextId = 1;
const grades = {};

// nextId++;

app.get('/api/grades', (req, res) => {
  const gradeArray = [];
  for (const key in grades) {
    gradeArray.push(grades[key]);
  }
  res.json(gradeArray);
});

const expressJson = express.json();
app.use(expressJson);

app.post('/api/grades', (req, res) => {
  req.body.id = nextId;
  nextId++;
  grades[req.body.id] = req.body;
  res.json(req.body);
  res.status(201).end();
});

app.listen(3000, () => {
  console.log('Connecting to port 3000');
});
