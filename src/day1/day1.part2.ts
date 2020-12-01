import { testEntry } from './day1';

export const day1part2 = (input: number[]) => {
  let answer;
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
      const e = input[i];
      const e2 = input[j];
      const match = testEntry(input, e, e2);
      if (match) {
        answer = e * e2 * match;
        break;
      }
    }
  }
  return answer;
};
