import { logAnswer } from '../utils/logging';
import { day2, isValid } from './day2';
import { data } from './day2.data';

test('Provided test cases', () => {
  expect(isValid('1-3 a: abcde')).toBe(true);
  expect(isValid('1-3 b: cdefg')).toBe(false);
  expect(isValid('2-9 c: ccccccccc')).toBe(true);
  expect(isValid('15-18 c: cccccccccccccczcczc')).toBe(true);
  expect(isValid('1-18 p: pppppppppppppppppp')).toBe(true);
  expect(isValid('3-5 p: ppkfkn')).toBe(false);
  expect(isValid('10-15 v: vvwvvvdvvzslhvz')).toBe(false);
  expect(isValid('1-5 k: kkkkkk')).toBe(false);
  expect(isValid('3-9 r: trhrrrrrgrrn')).toBe(true);
});

test('Returns an answer', () => {
  const answer = day2(data);
  logAnswer(answer);
  expect(typeof answer).toBe('number');
  expect(answer).toBeGreaterThan(0);
});
