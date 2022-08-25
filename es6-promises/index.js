const takeAChance = require('./take-a-chance');

const chanceOutput = takeAChance('Tarra');

chanceOutput.then(value => console.log(value));
chanceOutput.catch(err => console.error(err.message));
