import { day4part2 } from './day4.part2';
import { logAnswer } from '../utils/logging';
import { data, testData2, testData3 } from './day4.data';

test('Provided test cases', () => {
  expect(day4part2(testData2)).toBe(0);
  expect(day4part2(testData3)).toBe(4);
});

test('Returns an answer', () => {
  const answer = day4part2(data);
  logAnswer(answer);
  expect(typeof answer).toBe('number');
  expect(answer).toBeGreaterThan(0);
});
