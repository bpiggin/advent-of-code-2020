import { parseInput } from '../utils/input';
import { logAnswer } from '../utils/logging';
import { day1 } from './day1';
import { data } from './day1.data';

test('Provided test cases', () => {
  const testInput = parseInput(`1721
  979
  366
  299
  675
  1456`) as number[];
  expect(day1(testInput)).toBe(514579);
});

// test('Returns an answer', () => {
//   const answer = day1(data);
//   expect(typeof answer).toBe('number');
//   expect(isNaN(answer)).toBe(false);
//   expect(day1(data)).toBeGreaterThan(0);
//   logAnswer(answer);
// });
