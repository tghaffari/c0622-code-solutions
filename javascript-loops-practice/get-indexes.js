/* exported getIndexes */
function getIndexes(array) {
  var indexes = [];
  var i = 0;
  while (i < array.length) {
    indexes.push(i);
    i++;
  }
  return indexes;
}
