const b = require('./b.js');

test('finds the nunbers that sum to 2020', () => {
  expect(b.findNumberSums([1, 5, 950, 50, 1020, 10])).toEqual([950, 50, 1020]);
});

test('returns null when no matches found', () => {
  expect(b.findNumberSums([1, 5, 100, 2010])).toBe(null);
});

test('example from problem', () => {
  expect(b.findNumberSums([1721, 979, 366, 299, 675, 1456])).toEqual([979, 366, 675]);
});
