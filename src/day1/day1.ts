export const testEntry = (input: number[], test: number, test2: number = 0) => {
  return input.find(
    (e) => e !== test && e !== test2 && e + test + test2 === 2020,
  );
};

export const day1 = (input: number[]) => {
  let answer;
  for (let i = 0; i < input.length; i++) {
    const e = input[i];
    const match = testEntry(input, e);
    if (match) {
      answer = e * match;
      break;
    }
  }
  return answer;
};
