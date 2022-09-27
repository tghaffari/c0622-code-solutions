/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  let value = queue.dequeue();
  if (typeof queue.peek() === 'undefined') {
    return value;
  }

  let found = false;
  while (!found) {
    if (value <= queue.peek()) {
      found = true;
      return value;
    }
    queue.enqueue(value);
    value = queue.dequeue();
  }
  return value;
}
