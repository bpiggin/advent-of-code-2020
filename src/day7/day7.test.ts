import { day7 } from './day7';
import { logAnswer } from '../utils/logging';
import { data, testData } from './day7.data';

test('Provided test cases', () => {
  expect(day7(testData)).toBe(4);
});

test('Returns an answer', () => {
  const answer = day7(data);
  logAnswer(answer);
  expect(typeof answer).toBe('number');
  expect(answer).toBeGreaterThan(0);
});
