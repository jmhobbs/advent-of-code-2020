const a = require('./a.js');

test('1-3 a: abcde', () => {
  expect(a.passwordValid([1, 3, 'a', 'abcde'])).toBe(true);
});

test('1-3 b: cdefg', () => {
  expect(a.passwordValid([1, 3, 'b', 'cdefg'])).toBe(false);
});

test('2-9 c: ccccccccc', () => {
  expect(a.passwordValid([2, 9, 'c', 'ccccccccc'])).toBe(true);
});

test('2-9 c: abdef', () => {
  expect(a.passwordValid([2, 9, 'c', 'abdef'])).toBe(false);
});
