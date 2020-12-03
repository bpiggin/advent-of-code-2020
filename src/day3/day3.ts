export const day3 = (input: string[]) => {
  return input.reduce((a, line, i) => {
    const x = (i * 3) % input[0].length;
    return line[x] === '#' ? a + 1 : a;
  }, 0);
};
