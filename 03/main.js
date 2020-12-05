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
  console.log('A:', a.treesInSlope(m, 3, 1)[1]);
});
