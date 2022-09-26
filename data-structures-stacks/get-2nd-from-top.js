/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  let top = stack.peek();
  if (top === undefined) {
    return undefined;
  } else {
    top = stack.pop();
    const secondFromTop = stack.peek();
    stack.push(top);
    return secondFromTop;
  }
}
