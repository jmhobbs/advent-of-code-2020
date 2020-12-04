const b = require('./b');

test('1-3 a: abcde', () => {
  expect(b.passwordValid([1, 3, 'a', 'abcde'])).toBe(true);
});

test('1-3 b: cdefg', () => {
  expect(b.passwordValid([1, 3, 'b', 'cdefg'])).toBe(false);
});

test('2-9 c: ccccccccc', () => {
  expect(b.passwordValid([2, 9, 'c', 'ccccccccc'])).toBe(false);
});
