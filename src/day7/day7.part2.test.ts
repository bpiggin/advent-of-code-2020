import { day7part2 } from './day7.part2';
import { logAnswer } from '../utils/logging';
import { data, testData, testData2 } from './day7.data';

test('Provided test cases', () => {
  expect(day7part2(testData)).toBe(32);
  expect(day7part2(testData2)).toBe(126);
});

test('Returns an answer', () => {
  const answer = day7part2(data);
  logAnswer(answer);
  expect(typeof answer).toBe('number');
  expect(answer).toBeGreaterThan(0);
});
