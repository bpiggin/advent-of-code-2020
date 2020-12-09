export const findSummingNumber = (arr: number[], total: number) => {
  const valueIndex = arr.findIndex((e) => e === total / 2);
  const testArr = valueIndex > 0 ? arr.splice(valueIndex, 1) : arr;
  const map = new Map(testArr.map((e, i) => [e, i]));
  const match = testArr.find((e) => map.has(total - e));
  return match;
};

export const day1 = (input: number[]) => {
  const match = findSummingNumber(input, 2020) ?? 0;
  return match * (2020 - match);
};
