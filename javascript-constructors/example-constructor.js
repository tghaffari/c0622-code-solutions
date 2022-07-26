
function ExampleConstructor() {}

console.log('value of prototype property of ExampleConstructor Function:',
  ExampleConstructor.prototype);
console.log('type of prototype property of ExampleConstructor Function:',
  typeof ExampleConstructor.prototype);

var functionReturn = new ExampleConstructor();
console.log('value of functionReturn:', functionReturn);

var instance = functionReturn instanceof ExampleConstructor;
console.log('Is functionReturn an instance of ExampleConstructor?', instance);
