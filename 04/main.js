/* eslint-disable no-console */
const lineReader = require('line-reader');
const passport = require('./passport.js');

function loadInput(cb) {
  let lines = [];
  const passports = [];
  lineReader.eachLine('input.txt', (line, last) => {
    if (line === '') {
      passports.push(new passport.Passport(lines));
      lines = [];
    } else {
      lines.push(line);
    }

    if (last) {
      passports.push(new passport.Passport(lines));
      cb(passports);
    }
  });
}

loadInput((passports) => {
  const validACount = passports.map((p) => p.validA()).reduce((acc, val) => acc + (val ? 1 : 0));
  console.log('A:', validACount);

  const validBCount = passports.map((p) => p.validB()).reduce((acc, val) => acc + (val ? 1 : 0));
  console.log('B:', validBCount);
});
