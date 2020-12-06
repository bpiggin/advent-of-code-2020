import { day6part2 } from './day6.part2';
import { logAnswer } from '../utils/logging';
import { data } from './day6.data';
import { data3 } from './day6.data';

test('Provided test cases', () => {
  expect(day6part2(data3)).toBe(6);
});

test('Returns an answer', () => {
  const answer = day6part2(data);
  logAnswer(answer);
  expect(typeof answer).toBe('number');
  expect(answer).toBeGreaterThan(0);
});
