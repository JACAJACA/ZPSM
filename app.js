const _ = require('lodash');

const numbers = [1,2,3,4,5];
const mean = _.mean(numbers);

const max = _.max(numbers);
const min = _.min(numbers);

console.log('Średnia arytmetyczna:', mean);
console.log('Maksymalna wartość:', max);
console.log('Minimalna wartość:', min);