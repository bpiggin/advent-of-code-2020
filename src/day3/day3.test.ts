import { findTreesOnPath } from './day3';
import { logAnswer } from '../utils/logging';
import { data, testInput } from './day3.data';

test('Provided test cases', () => {
  expect(findTreesOnPath(testInput, 1, 1)).toBe(2);
  expect(findTreesOnPath(testInput, 3, 1)).toBe(7);
  expect(findTreesOnPath(testInput, 5, 1)).toBe(3);
  expect(findTreesOnPath(testInput, 7, 1)).toBe(4);
  expect(findTreesOnPath(testInput, 1, 2)).toBe(2);
});

test('Returns an answer', () => {
  const answer = findTreesOnPath(data, 3, 1);
  logAnswer(answer);
  expect(typeof answer).toBe('number');
  expect(answer).toBeGreaterThan(0);
});
