/* exported getTail */

function getTail(list) {
  let data = list.data;
  let node = list.next;
  while (node !== null) {
    data = node.data;
    node = node.next;
  }
  return data;
}
