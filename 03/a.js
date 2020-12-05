exports.treesInSlope = (map, run, fall) => {
  let open = 0;
  let trees = 0;
  let x = run;
  let y = fall;

  do {
    if (map.treeAt(x, y)) {
      trees += 1;
    } else {
      open += 1;
    }
    x += run;
    y += fall;
  } while (y < map.height());

  return [open, trees];
};
