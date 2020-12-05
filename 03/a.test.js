const a = require('./a.js');
const map = require('./map.js');

const m = new map.Map(`..##.......
#...#...#..
.#....#..#.
..#.#...#.#
.#...##..#.
..#.##.....
.#.#.#....#
.#........#
#.##...#...
#...##....#
.#..#...#.#`);

test('slope 1/1', () => {
  expect(a.treesInSlope(m, 1, 1)).toEqual(2);
});

test('slope 3/1', () => {
  expect(a.treesInSlope(m, 3, 1)).toEqual(7);
});

test('slope 5/1', () => {
  expect(a.treesInSlope(m, 5, 1)).toEqual(3);
});

test('slope 7/1', () => {
  expect(a.treesInSlope(m, 7, 1)).toEqual(4);
});

test('slope 1/2', () => {
  expect(a.treesInSlope(m, 1, 2)).toEqual(2);
});
