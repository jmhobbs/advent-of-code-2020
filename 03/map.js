exports.Map = class {
  constructor(map) {
    this.map = [];
    if (map) {
      map.split('\n').forEach((line) => {
        this.addRow(line);
      });
    }
  }

  addRow(line) {
    const row = [];
    [...line].forEach((c) => {
      row.push(c === '#');
    });
    this.map.push(row);
  }

  treeAt(x, y) {
    const trueX = x % this.width();
    return this.map[y][trueX];
  }

  height() {
    return this.map.length;
  }

  width() {
    return this.map[0].length;
  }
};
