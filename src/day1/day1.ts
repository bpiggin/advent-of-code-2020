export const day1 = (input: number[]) => {
  const map = new Map(input.map((e, i) => [e, i]));
  const match = input.find((e) => map.has(2020 - e)) ?? 0;
  return match * (2020 - match);
};
