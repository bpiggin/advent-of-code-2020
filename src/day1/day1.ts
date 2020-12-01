export const func = (input: number[], test: number) => {
  let answer;
  input.forEach((e, i) => {
    if (e + test === 2020) {
      answer = e * test;
    }
  });
  return answer;
};

export const day1 = (input: number[]) => {
  let answer;
  input.forEach((e) => {
    const well = func(input, e);
    if (well) {
      answer = well;
    }
  });
  return answer;
};
