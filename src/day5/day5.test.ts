import { day5, getSeatId } from './day5';
import { logAnswer } from '../utils/logging';
import { data } from './day5.data';

test('Provided test cases', () => {
  expect(getSeatId('BFFFBBFRRR')).toBe(567);
  expect(getSeatId('FFFBBBFRRR')).toBe(119);
  expect(getSeatId('BBFFBBFRLL')).toBe(820);
});

test('Returns an answer', () => {
  const answer = day5(data);
  logAnswer(answer);
  expect(typeof answer).toBe('number');
  expect(answer).toBeGreaterThan(0);
});
