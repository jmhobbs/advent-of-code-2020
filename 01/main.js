/* eslint-disable no-console */
const lineReader = require('line-reader');
const a = require('./a');

function loadInput(cb) {
  const numbers = [];
  lineReader.eachLine('input.txt', (line, last) => {
    numbers.push(parseInt(line, 10));
    if (last) {
      cb(numbers);
    }
  });
}

function runA(numbers) {
  const result = a.findNumberSums(numbers);
  console.log('A:', result[0] * result[1]);
}

loadInput(runA);
