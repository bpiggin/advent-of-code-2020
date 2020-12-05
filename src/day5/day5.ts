const diff = (range: number[]) => {
  return Math.ceil((range[1] - range[0]) / 2);
};

export const getSeatId = (bsp: string) => {
  let row = [0, 127];
  let col = [0, 7];
  for (let char of bsp) {
    if (char === 'B') {
      row[0] = row[0] + diff(row);
    }
    if (char === 'F') {
      row[1] = row[1] - diff(row);
    }
    if (char === 'R') {
      col[0] = col[0] + diff(col);
    }
    if (char === 'L') {
      col[1] = col[1] - diff(col);
    }
  }
  return row[0] * 8 + col[0];
};

export const day5 = (input: string[]) => {
  return Math.max(...input.map((e) => getSeatId(e)));
};
