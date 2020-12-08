import { indexesOf } from '../utils/arrays';
import { day8, runProgram } from './day8';

const fixProgram = (input: string[]) => {
  const jmps = indexesOf(
    input.map((e) => e.split(' ')[0]),
    'jmp',
  );
  let answer: string[] = [];
  for (let i = 0; i < jmps.length; i++) {
    const newProgram = input.map((e, j) =>
      j === jmps[i] ? e.replace('jmp', 'nop') : e,
    );
    const [_, hasLoop] = runProgram(newProgram);
    if (!hasLoop) {
      answer = newProgram;
      break;
    }
  }
  return answer;
};

export const day8part2 = (input: string[]) => {
  const program = fixProgram(input);
  return day8(program);
};
