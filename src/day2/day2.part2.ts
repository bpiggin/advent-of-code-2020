import { parseLine } from './day2';

export const isValid = (line: string) => {
  const { password, letter, min, max } = parseLine(line);
  const first = password[min - 1] === letter;
  const second = password[max - 1] === letter;
  return +first + +second === 1;
};

export const day2part2 = (input: string[]) => {
  return input.filter((e) => isValid(e)).length;
};
