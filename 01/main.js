/* eslint-disable no-console */
const lineReader = require('line-reader');
const a = require('./a');
const b = require('./b');

function loadInput(cb) {
  const numbers = [];
  lineReader.eachLine('input.txt', (line, last) => {
    numbers.push(parseInt(line, 10));
    if (last) {
      cb(numbers);
    }
  });
}

loadInput((numbers) => {
  const aResult = a.findNumberSums(numbers);
  console.log('A:', aResult[0] * aResult[1]);

  const bResult = b.findNumberSums(numbers);
  console.log('B:', bResult[0] * bResult[1] * bResult[2]);
});
