#!/bin/bash
echo "import { data } from './day$1.data.ts';

export const day$1part2 = () => {
  return $1;
};" >> src/day$1/day$1.part2.ts

echo "import { day$1part2 } from './day$1.part2';
import { logAnswer } from '../utils/logging';
import { data } from './day$1.data.ts';

test('Provided test cases', () => {
  expect(day$1part2()).toBe($1);
});

test('Returns an answer', () => {
  const answer = day$1part2();
  logAnswer(answer);
  expect(typeof answer).toBe('number');
  expect(answer).toBeGreaterThan(0);
});" >> src/day$1/day$1.part2.test.ts
