import { indexesOf } from '../arrays';

test('Finds the indexes of all the matching entries', () => {
  const input = [1, 2, 3, 4, 5, 6, 7, 1, 8, 9, 1];
  expect(indexesOf(input, (e) => e === 1)).toStrictEqual([0, 7, 10]);
  expect(indexesOf(input, (e) => e % 2 === 0)).toStrictEqual([1, 3, 5, 8]);
});
