export const runProgram = (program: string[]) => {
  const visited = new Set();
  let currentIndex = 0;
  let acc = 0;
  let hasLoop = false;
  for (let i = 0; i < program.length; i++) {
    if (visited.has(currentIndex) || currentIndex === program.length) {
      hasLoop = visited.has(currentIndex);
      break;
    }
    visited.add(currentIndex);
    const [instruction, value] = program[currentIndex].split(' ');
    const increment = instruction === 'jmp' ? Number(value) : 1;
    if (instruction === 'acc') {
      acc += Number(value);
    }
    currentIndex += increment;
  }
  return [acc, hasLoop];
};

export const day8 = (input: string[]) => {
  const [acc] = runProgram(input);
  return acc;
};
