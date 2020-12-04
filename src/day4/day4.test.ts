import { day4 } from './day4';
import { logAnswer } from '../utils/logging';
import { data, testData } from './day4.data';

test('Provided test cases', () => {
  expect(day4(testData)).toBe(2);
});

test('Returns an answer', () => {
  const answer = day4(data);
  logAnswer(answer);
  expect(typeof answer).toBe('number');
  expect(answer).toBeGreaterThan(0);
});
