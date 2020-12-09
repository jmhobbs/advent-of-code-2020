exports.findSeat = (sequence) => {
  let rowSize = 128;
  let rowBase = 0;
  let colSize = 8;
  let colBase = 0;

  /* eslint-disable no-restricted-syntax */
  for(const ch of sequence) {
    switch(ch) {
      case 'F':
        rowSize /= 2;
        break
      case 'B':
        rowSize /= 2;
        rowBase += rowSize;
        break
      case 'L':
        colSize /= 2;
        break
      case 'R':
        colSize /= 2;
        colBase += colSize;
        break
      default:
        /* eslint-disable no-throw-literal */
        throw `Unknown Sequence Character #{ch}`;
    }
  }

  return [rowBase, colBase];
};

exports.seatID = (row, col) => row * 8 + col;
