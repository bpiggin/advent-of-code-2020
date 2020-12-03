import { findTreesOnPath } from './day3';

export const day3part2 = (input: string[]) => {
  return (
    findTreesOnPath(input, 1, 1) *
    findTreesOnPath(input, 3, 1) *
    findTreesOnPath(input, 5, 1) *
    findTreesOnPath(input, 7, 1) *
    findTreesOnPath(input, 1, 2)
  );
};
