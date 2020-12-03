export const findTreesOnPath = (
  input: string[],
  right: number,
  down: number,
) => {
  return input.reduce((a, line, i) => {
    if (i % down !== 0) return a;
    const x = ((i / down) * right) % input[0].length;
    return line[x] === '#' ? a + 1 : a;
  }, 0);
};
