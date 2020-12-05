import { getSeatId } from './day5';

export const day5part2 = (input: string[]) => {
  const seats = input.map((e) => getSeatId(e)).sort();
  const gap = seats.find((e, i) => e + 1 !== seats[i + 1])!;
  return gap + 1;
};
