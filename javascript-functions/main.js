function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}
var convertedSeconds = convertMinutesToSeconds(5);
console.log('convertMinutesToSeconds Value:', convertedSeconds);

function greet(name) {
  var greeting = 'Hello, ' + name + '!';
  return greeting;
}
var greetTarra = greet('Tarra');
console.log('greet value:', greetTarra);

function getArea(width, height) {
  var area = width * height;
  return area;
}
var rectangleArea = getArea(17, 42);
console.log('getArea value:', rectangleArea);

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}
var FirstName = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
console.log('getFirstName value:', FirstName);

function getLastElement(array) {
  var lastElement = array[array.length - 1];
  return lastElement;
}

var lastELement = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('getLastElement value:', lastELement);
