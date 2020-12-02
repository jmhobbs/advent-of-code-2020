const a = require('./a.js');

test('finds the nunbers that sum to 2020', () => {
  expect(a.findNumberSums([1, 5, 1000, 50, 1020, 10])).toEqual([1000, 1020]);
});

test('returns null when no matches found', () => {
  expect(a.findNumberSums([1, 5, 100, 2010])).toBe(null);
});

test('example from problem', () => {
  expect(a.findNumberSums([1721, 979, 366, 299, 675, 1456])).toEqual([1721, 299]);
});
