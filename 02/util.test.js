const util = require('./util.js');

test('parses password lines', () => {
  expect(util.parsePasswordLine('1-3 a: abcde')).toEqual([1, 3, 'a', 'abcde']);
  expect(util.parsePasswordLine('1-3 b: cdefg')).toEqual([1, 3, 'b', 'cdefg']);
  expect(util.parsePasswordLine('2-9 c: ccccccccc')).toEqual([2, 9, 'c', 'ccccccccc']);
});
