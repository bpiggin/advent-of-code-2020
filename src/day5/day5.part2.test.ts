import { day5part2 } from './day5.part2';
import { logAnswer } from '../utils/logging';
import { data } from './day5.data';

test('Returns an answer', () => {
  const answer = day5part2(data);
  logAnswer(answer);
  expect(typeof answer).toBe('number');
  expect(answer).toBeGreaterThan(0);
});
