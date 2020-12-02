import { logAnswer } from '../utils/logging';
import { data } from './day2.data';
import { day2part2, isValid } from './day2.part2';

test('Provided test cases', () => {
  expect(isValid('1-3 a: abcde')).toBe(true);
  expect(isValid('1-3 b: cdefg')).toBe(false);
  expect(isValid('2-9 c: ccccccccc')).toBe(false);
});

test('Returns an answer', () => {
  const answer = day2part2(data);
  logAnswer(answer);
  expect(typeof answer).toBe('number');
  expect(answer).toBeGreaterThan(0);
});
