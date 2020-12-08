import { day8part2 } from './day8.part2';
import { logAnswer } from '../utils/logging';
import { data, testData } from './day8.data';

test('Provided test cases', () => {
  expect(day8part2(testData)).toBe(8);
});

test('Returns an answer', () => {
  const answer = day8part2(data);
  logAnswer(answer);
  expect(typeof answer).toBe('number');
  expect(answer).toBeGreaterThan(0);
});
