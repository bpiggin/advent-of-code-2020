import { findSummingNumber } from '../day1/day1';

export const findRuleBreaker = (arr: number[], preambleLength: number) => {
  let answer = 0;
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i + preambleLength];
    const precedingNumbers = arr.slice(i, i + preambleLength);
    const match = findSummingNumber(precedingNumbers, value);
    if (match === undefined) {
      answer = value;
      break;
    }
  }
  return answer;
};

export const day9 = (input: number[]) => {
  const ruleBreaker = findRuleBreaker(input, 25);
  return ruleBreaker;
};
