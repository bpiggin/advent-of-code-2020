export const indexesOf = (arr: unknown[], val: unknown) => {
  return arr.reduce((a: number[], b, i) => (b === val ? a.concat(i) : a), []);
};
