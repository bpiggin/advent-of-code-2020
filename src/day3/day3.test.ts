import { day3 } from './day3';
import { logAnswer } from '../utils/logging';
import { data, testInput } from './day3.data';

test('Provided test cases', () => {
  expect(day3(testInput)).toBe(7);
});

test('Returns an answer', () => {
  const answer = day3(data);
  logAnswer(answer);
  expect(typeof answer).toBe('number');
  expect(answer).toBeGreaterThan(0);
});
