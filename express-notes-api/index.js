/* eslint-disable no-console */
const express = require('express');
const app = express();
const jsonData = require('./data.json');
const fs = require('fs');

app.get('/api/notes', (req, res) => {
  res.status(200);
  const dataArray = [];
  for (const key in jsonData.notes) {
    dataArray.push(jsonData.notes[key]);
  }
  res.send(dataArray);
}
);

app.get('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (Number.isInteger(id) && id > 0) {
    if (jsonData.notes[id]) {
      res.status(200);
      res.send(jsonData.notes[id]);
    } else if (!jsonData.notes[id]) {
      res.status(404).json({ error: `There is no entry with ID ${id}` });
    }
  } else {
    res.status(400).json({ error: 'ID must be a positive integer.' });
  }
});

app.use(express.json());

app.post('/api/notes', (req, res) => {
  if (req.body.content === undefined) {
    res.status(400).json({ error: 'Content is a required field' });
  } else {
    req.body.id = jsonData.nextId;
    jsonData.notes[jsonData.nextId] = req.body;
    jsonData.nextId++;
    const newJsonNote = JSON.stringify(jsonData, null, 2);
    fs.writeFile('data.json', newJsonNote + '\n', err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error ocurred.' });
      } else {
        res.status(201);
        res.json(req.body);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (Number.isInteger(id) && id > 0) {
    if (jsonData.notes[id]) {
      delete jsonData.notes[id];
      const newJsonNote = JSON.stringify(jsonData, null, 2);
      fs.writeFile('data.json', newJsonNote + '\n', err => {
        if (err) {
          console.error(err);
          res.status(500).json({ error: 'An unexpected error ocurred.' });
        } else {
          res.sendStatus(204);
        }
      });
    } else if (!jsonData.notes[id]) {
      res.status(404).json({ error: `There is no entry with ID ${id}` });
    }
  } else {
    res.status(400).json({ error: 'ID must be a positive integer.' });
  }
});

app.put('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    res.status(400).json({ error: 'ID must be a positive integer.' });
  } else if (req.body.content === undefined) {
    res.status(400).json({ error: 'Content is a required field' });
  } else {
    if (jsonData.notes[id]) {
      jsonData.notes[id].content = req.body.content;
      const newJsonNote = JSON.stringify(jsonData, null, 2);
      fs.writeFile('data.json', newJsonNote + '\n', err => {
        if (err) {
          console.error(err);
          res.status(500).json({ error: 'An unexpected error ocurred.' });
        } else {
          res.status(200);
          res.json(jsonData.notes[id]);
        }
      });
    } else if (!jsonData.notes[id]) {
      res.status(404).json({ error: `There is no entry with ID ${id}` });
    }
  }
}
);

app.listen(3000, (res, req) => {
  console.log('Listening on port 3000');
});
