/* eslint-disable no-console */
const lineReader = require('line-reader');
const a = require('./a');
const util = require('./util');

function loadInput(cb) {
  const passwords = [];
  lineReader.eachLine('input.txt', (line, last) => {
    passwords.push(util.parsePasswordLine(line));
    if (last) {
      cb(passwords);
    }
  });
}

loadInput((passwords) => {
  let validCount = 0;
  passwords.forEach((password) => {
    if (a.passwordValid(password)) {
      validCount += 1;
    }
  });
  console.log('A:', validCount);
});
