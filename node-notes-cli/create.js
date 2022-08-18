const data = require('./data.json');
const fs = require('fs');

function create() {
  data.notes[data.nextId] = process.argv[3];
  data.nextId++;
  const newJsonText = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', newJsonText + '\n', err => {
    if (err) throw err;
  });

}

module.exports = create;
