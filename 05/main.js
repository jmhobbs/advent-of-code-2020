/* eslint-disable no-console */
const lineReader = require('line-reader');
const a = require('./a.js');

function loadInput(cb) {
  const lines = [];

  lineReader.eachLine('input.txt', (line, last) => {
    lines.push(line);

    if (last) {
      cb(lines);
    }
  });
}

loadInput((lines) => {
  let highest = 0;
  lines.forEach(line => {
    highest = Math.max(highest, a.seatID(...a.findSeat(line)));
  });
  console.log('A:', highest);
});