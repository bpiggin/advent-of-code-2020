import { day3part2 } from './day3.part2';
import { logAnswer } from '../utils/logging';
import { data } from './day3.data';
import { testInput } from './day3.data';

test('Provided test cases', () => {
  expect(day3part2(testInput)).toBe(336);
});

test('Returns an answer', () => {
  const answer = day3part2(data);
  logAnswer(answer);
  expect(typeof answer).toBe('number');
  expect(answer).toBeGreaterThan(0);
});
