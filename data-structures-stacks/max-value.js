/* exported maxValue */

function maxValue(stack) {
  if (stack.peek() === undefined) return -Infinity;

  let maxValue = stack.pop();
  while (stack.peek() !== undefined) {
    const comparisonNum = stack.pop();
    if (maxValue < comparisonNum) {
      maxValue = comparisonNum;
    }
  }
  return maxValue;
}
