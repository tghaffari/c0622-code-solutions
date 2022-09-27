/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  let value;
  let count = 0;

  while (count <= index) {
    value = queue.dequeue();
    if (queue.peek() === undefined || count === index) {
      return value;
    }
    queue.enqueue(value);
    count++;
  }
  return value;
}
