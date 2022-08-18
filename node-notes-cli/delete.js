const data = require('./data.json');
const fs = require('fs');

function deleteNote(property) {
  delete data.notes[property];
  const newJsonText = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', newJsonText + '\n', err => {
    if (err) throw err;
  });

}

module.exports = deleteNote;
