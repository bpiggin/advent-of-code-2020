import { day9, findRuleBreaker } from './day9';
import { logAnswer } from '../utils/logging';
import { data, testData } from './day9.data';

test('Provided test cases', () => {
  expect(findRuleBreaker(testData, 5)).toBe(127);
});

test('Returns an answer', () => {
  const answer = day9(data);
  logAnswer(answer);
  expect(typeof answer).toBe('number');
  expect(answer).toBeGreaterThan(0);
});
