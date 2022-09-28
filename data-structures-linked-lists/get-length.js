/* exported getLength */

function getLength(list) {
  let count = 1;
  let node = list.next;
  while (node !== null) {
    count++;
    node = node.next;
  }
  return count;
}
