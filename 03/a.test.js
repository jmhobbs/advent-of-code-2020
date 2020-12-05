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

test('slope 3/1', () => {
  expect(a.treesInSlope(m, 3, 1)).toEqual([3, 7]);
});
