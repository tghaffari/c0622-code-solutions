const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log('evenNumbers:', evenNumbers);

const overFive = numbers.filter(num => num > 5);
console.log('overFive:', overFive);

const startWithE = names.filter(name => name[0] === 'E');
console.log('startsWIthE:', startWithE);

const haveD = names.filter(name => name.includes('d') || name.includes('D'));
console.log('haveD:', haveD);
