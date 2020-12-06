export const day6 = (input: string[]) => {
  return input
    .map((e) => e.replace(/[\n]/g, ''))
    .reduce((a, b) => a + new Set(b).size, 0);
};
