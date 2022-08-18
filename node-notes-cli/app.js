const readNotes = require('./read.js');
const create = require('./create.js');
const deleteNote = require('./delete.js');
const update = require('./update.js');

if (process.argv[2] === 'read') {
  readNotes();
} else if (process.argv[2] === 'create') {
  create();
} else if (process.argv[2] === 'delete') {
  deleteNote(process.argv[3]);
} else if (process.argv[2] === 'update') {
  update(process.argv[3], process.argv[4]);
}
