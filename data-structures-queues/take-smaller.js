/* exported takeSmaller */

function takeSmaller(queue) {
  const firstNum = queue.dequeue();
  const secondNum = queue.dequeue();
  if (typeof firstNum === 'undefined') return undefined;
  if (typeof secondNum === 'undefined') return firstNum;
  if (firstNum < secondNum) {
    queue.enqueue(secondNum);
    return firstNum;
  } else {
    queue.enqueue(firstNum);
    return secondNum;
  }
}
