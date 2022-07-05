var student = {
  firstName: 'Tarra',
  lastName: 'Ghaffari',
  age: 28
};
var fullName = student.firstName + ' ' + student.lastName;
console.log('Full Name:', fullName);
student.livesInIrvine = false;
student.previousOccupation = 'Legal Coordinator at MGM Studios';
console.log('Student lives in Irvine:', student.livesInIrvine);
console.log('Student previous occupation:', student.previousOccupation);

var vehicle = {
  make: 'Toyota',
  model: 'Prius',
  year: 2014
};
vehicle['color'] = 'white';
vehicle['isConvertible'] = false;
console.log('Vehicle Color:', vehicle.color);
console.log('Vehicle:', vehicle);

var pet = {
  name: 'Squrit',
  type: 'turtle'
};
delete pet.name;
delete pet.type;
console.log('Pet:', pet);
