exports.treesInSlope = (map, run, fall) => {
  let trees = 0;
  let x = run;
  let y = fall;

  do {
    if (map.treeAt(x, y)) {
      trees += 1;
    }
    x += run;
    y += fall;
  } while (y < map.height());

  return trees;
};
