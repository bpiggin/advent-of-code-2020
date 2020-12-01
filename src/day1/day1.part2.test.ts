import { parseInput } from '../utils/input';
import { logAnswer } from '../utils/logging';
import { data } from './day1.data';
import { day1part2 } from './day1.part2';

test('Provided test cases', () => {
  const testInput = parseInput(`1721
  979
  366
  299
  675
  1456`) as number[];
  expect(day1part2(testInput)).toBe(241861950);
});

test('Returns an answer', () => {
  logAnswer(day1part2(data));
  expect(typeof day1part2(data)).toBe('number');
  expect(day1part2(data)).toBeGreaterThan(0);
});
