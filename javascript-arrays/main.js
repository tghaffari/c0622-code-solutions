var colors = ['red', 'white', 'blue'];
console.log('1st color:', colors[0]);
console.log('2nd color:', colors[1]);
console.log('3rd color:', colors[2]);
console.log('America is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2] + '.');

colors[2] = 'green';
console.log('Mexico is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2] + '.');
console.log('Colors:', colors);

var students = ['Spiderman', 'Thor', 'Iron Man', 'Captain Marvel'];
var numberOfStudents = students.length;
console.log('There are ' + numberOfStudents + (' students in class.'));
var lastIndex = numberOfStudents - 1;
var lastStudent = students[lastIndex];
console.log('The last student is ' + lastStudent + '.');
console.log('Students:', students);
