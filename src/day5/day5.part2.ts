import { getSeatId } from './day5';

export const day5part2 = (input: string[]) => {
  const seats = input.map((e) => getSeatId(e)).sort();
  let answer = 0;
  for (let i = 0; i < seats.length; i++) {
    const seat = seats[i];
    if (seats[i + 1] !== seat + 1) {
      answer = seat + 1;
      break;
    }
  }
  return answer;
};
