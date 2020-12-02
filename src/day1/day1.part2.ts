export const day1part2 = (input: number[]) => {
  let answer = 0;
  const map = new Map(input.map((e, i) => [e, i]));
  input.find((e1) => {
    input.find((e2) => {
      const index = map.get(2020 - e1 - e2);
      if (index) {
        answer = e1 * e2 * input[index];
      }
    });
  }) ?? 0;
  return answer;
};
