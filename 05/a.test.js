const a = require('./a.js');

test('FBFBBFFRLR', () => {
  expect(a.findSeat('FBFBBFFRLR')).toEqual([44, 5]);
});

test('BFFFBBFRRR', () => {
  expect(a.findSeat('BFFFBBFRRR')).toEqual([70, 7]);
});

test('FFFBBBFRRR', () => {
  expect(a.findSeat('FFFBBBFRRR')).toEqual([14, 7]);
});

test('BBFFBBFRLL', () => {
  expect(a.findSeat('BBFFBBFRLL')).toEqual([102, 4]);
});