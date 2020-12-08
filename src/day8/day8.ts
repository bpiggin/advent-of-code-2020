export const day8 = (input: string[]) => {
  const visited = new Set();
  let currentIndex = 0;
  let acc = 0;
  for (let i = 0; i < input.length; i++) {
    const [instruction, value] = input[currentIndex].split(' ');
    if (visited.has(currentIndex)) {
      break;
    }
    visited.add(currentIndex);
    if (instruction === 'nop') {
      currentIndex++;
    }
    if (instruction === 'acc') {
      acc += Number(value);
      currentIndex++;
    }
    if (instruction === 'jmp') {
      currentIndex += Number(value);
    }
  }
  return acc;
};
