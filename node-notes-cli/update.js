const data = require('./data.json');
const fs = require('fs');

function update(property, input) {
  data.notes[property] = input;
  const newJsonText = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', newJsonText + '\n', err => {
    if (err) throw err;
  });

}

module.exports = update;
