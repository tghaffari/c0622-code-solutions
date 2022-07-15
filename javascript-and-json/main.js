var library = [
  {
    isbn: '1234567890184',
    title: 'Scythe',
    author: 'Neal Schusterman'
  },
  {
    isbn: '1984736485643',
    title: 'Frankenstein',
    author: 'Mary Shelley'
  },
  {
    isbn: '9374620918273',
    title: 'Pride and Prejudice',
    author: 'Jane Austen'
  }
];

console.log('typeof library:', typeof library);
console.log('library value: ', library);

JSON.stringify(library);
console.log('typeof JSON:', typeof JSON.stringify(library));
console.log('JSON.stringify(library):', JSON.stringify(library));

var studentJson = '{ "id":12345, "name":"Jane Austen"}';
console.log('studentJson string typeof:', typeof studentJson);
console.log('studentJSON value:', studentJson);

var student = JSON.parse(studentJson);
console.log('student typeof:', typeof student);
console.log('student value:', student);
