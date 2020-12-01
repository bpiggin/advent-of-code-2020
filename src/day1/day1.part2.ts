import { testEntry } from './day1';

export const day1part2 = (input: number[]) => {
  let answer;
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
      const match = testEntry(input, i, j);
      if (match) {
        answer = input[i] * input[j] * match;
        break;
      }
    }
  }
  return answer;
};
