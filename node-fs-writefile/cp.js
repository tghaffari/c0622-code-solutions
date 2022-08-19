/* eslint-disable no-console */
const fs = require('fs');

fs.readFile(process.argv[2], 'utf8', (err, data) => {
  if (err) throw err;
  fs.writeFile(process.argv[3], data, err => {
    if (err) throw err;
    console.log('This file has been saved.');
  }
  );

});
