const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = numbers.reduce((prevValue, currValue) => prevValue + currValue);
console.log('sum:', sum);

const product = numbers.reduce((prevValue, currValue) => prevValue * currValue);
console.log('product:', product);

const initialValue = 0;
const balance = account.reduce((prevValue, currValue) => {
  let balance = 0;
  if (currValue.type === 'deposit') {
    balance = prevValue + currValue.amount;
  } else if (currValue.type === 'withdrawal') {
    balance = prevValue - currValue.amount;
  }
  return balance;
}, initialValue);
console.log('balance:', balance);

const initialValue2 = {};
const composite = traits.reduce((prevValue, currValue) => {
  const pokemon = Object.assign(prevValue, currValue);
  return pokemon;
}, initialValue2);

console.log('Composite:', composite);
