import { day9part2, findContiguousList } from './day9.part2';
import { logAnswer } from '../utils/logging';
import { data, testData } from './day9.data';

test('Provided test cases', () => {
  expect(findContiguousList(testData, 127)).toBe(62);
});

test('Returns an answer', () => {
  const answer = day9part2(data);
  logAnswer(answer);
  expect(typeof answer).toBe('number');
  expect(answer).toBeGreaterThan(0);
});
