/* exported take2nd */

function take2nd(queue) {
  if (typeof queue.peek() === 'undefined') {
    return undefined;
  }

  const firstValue = queue.dequeue();
  const secondValue = queue.dequeue();
  queue.enqueue(firstValue);

  if (typeof secondValue === 'undefined') {
    return firstValue;
  }

  return secondValue;
}
