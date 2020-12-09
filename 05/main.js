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
  const found = [];
  lines.forEach(line => {
    const id = a.seatID(...a.findSeat(line));
    found.push(id);
    highest = Math.max(highest, id);
  });
  console.log('A:', highest);
  
  let last = 0;

  found.map((v) => parseInt(v, 10)).sort((l, r) => l - r).forEach((id) => {
    if(last === 0) {
      last = id;
      return;
    }

    if(id - last > 1) {
      console.log('B:', id - 1);
    }

    last = id;
   });
});