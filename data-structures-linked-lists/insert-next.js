/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported insertNext */

function insertNext(list, value) {
  const remainingList = list.next;
  const newNode = new LinkedList(value);
  list.next = newNode;
  list.next.next = remainingList;
  return list;
}
