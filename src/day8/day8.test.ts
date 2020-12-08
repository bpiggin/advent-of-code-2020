import { day8 } from './day8';
import { logAnswer } from '../utils/logging';
import { data, testData } from './day8.data';

test('Provided test cases', () => {
  expect(day8(testData)).toBe(5);
});

test('Returns an answer', () => {
  const answer = day8(data);
  logAnswer(answer);
  expect(typeof answer).toBe('number');
  expect(answer).toBeGreaterThan(0);
});
