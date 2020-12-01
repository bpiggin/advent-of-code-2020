export const testEntry = (
  input: number[],
  testIndex: number,
  testIndex2: number = -1,
) => {
  return input.find((e, i) => {
    const testValue2 = testIndex2 !== -1 ? input[testIndex2] : 0;
    if (i === testIndex || i === testIndex2) {
      return false;
    }
    return e + input[testIndex] + testValue2 === 2020;
  });
};

export const day1 = (input: number[]) => {
  let answer;
  for (let i = 0; i < input.length; i++) {
    const match = testEntry(input, i);
    if (match) {
      answer = input[i] * match;
      break;
    }
  }
  return answer;
};
