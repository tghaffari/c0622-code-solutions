/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  let top = stack.peek();
  if (top === undefined) {
    return undefined;
  } else {
    top = stack.pop();
    stack.push(value);
    stack.push(top);
  }
}
