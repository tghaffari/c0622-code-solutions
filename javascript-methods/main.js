var x = 2839;
var y = 283947;
var z = 893274;
var maximumValue = Math.max(x, y, z);
console.log('maximumValue:', maximumValue);

var heroes = ['Spiderman', 'Black Widow', 'Thor', 'Captain Marvel'];
var randomNumber = Math.random();
randomNumber *= heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);

var randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

var library = [
  {
    title: 'Scythe',
    author: 'Neal Shusterman'
  },
  {
    title: 'Lore',
    author: 'Alexandra Bracken'
  },
  {
    title: 'A Court of Thorns and Roses',
    author: 'Sara J. Maas'
  }
];

var lastBook = library.pop();
console.log('lastBook:', lastBook);
var firstBook = library.shift();
console.log('firstBook:', firstBook);

var js = {
  title: 'Javascript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};

var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library:', library);

var fullName = 'Tarra Ghaffari';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
