const data = require('./data.json');

function readNotes() {
  for (const key in data.notes) {
    console.log(`${key}: ${data.notes[key]}`);
  }
}

module.exports = readNotes;
