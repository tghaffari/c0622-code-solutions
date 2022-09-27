/* exported postpone */

function postpone(queue) {
  if (typeof queue.peek() !== 'undefined') {
    const value = queue.dequeue();
    queue.enqueue(value);
  }
}
