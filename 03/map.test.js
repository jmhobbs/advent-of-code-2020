const map = require('./map.js');

test('map smoke test', () => {
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

  expect(m.treeAt(0, 1)).toBe(true);
  expect(m.treeAt(2, 0)).toBe(true);
  expect(m.treeAt(0, 3)).toBe(false);
});
