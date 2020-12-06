import { day6 } from './day6';
import { logAnswer } from '../utils/logging';
import { data, data3 } from './day6.data';

test('Provided test cases', () => {
  expect(day6(data3)).toBe(11);
});

test('Returns an answer', () => {
  const answer = day6(data);
  logAnswer(answer);
  expect(typeof answer).toBe('number');
  expect(answer).toBeGreaterThan(0);
});
