export const func = (input: number[], test1: number, test2: number) => {
  let answer;
  input.forEach((e, i) => {
    if (e + test1 + test2 === 2020) {
      answer = e * test1 * test2;
    }
  });
  return answer;
};

export const day1part2 = (input: number[]) => {
  let answer;
  input.forEach((e1) => {
    input.forEach((e2) => {
      const well = func(input, e1, e2);
      if (well) {
        answer = well;
      }
    });
  });
  return answer;
};
