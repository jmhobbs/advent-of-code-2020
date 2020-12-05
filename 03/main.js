/* eslint-disable no-console */
const lineReader = require('line-reader');
const map = require('./map.js');
const a = require('./a.js');

function loadInput(cb) {
  const m = new map.Map();
  lineReader.eachLine('input.txt', (line, last) => {
    m.addRow(line);
    if (last) {
      cb(m);
    }
  });
}

loadInput((m) => {
  const treesA = a.treesInSlope(m, 3, 1);

  console.log('A:', treesA);
  console.log(
    'B:',
    treesA
      * a.treesInSlope(m, 1, 1)
      * a.treesInSlope(m, 5, 1)
      * a.treesInSlope(m, 7, 1)
      * a.treesInSlope(m, 1, 2),
  );
});
