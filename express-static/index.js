const express = require('express');
const app = express();
const path = require('path');

const absPath = path.join(__dirname, 'public');

app.use(express.static(absPath));

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
