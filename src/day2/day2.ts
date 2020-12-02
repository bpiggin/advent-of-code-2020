export const parseLine = (line: string) => {
  const [policy, password] = line.split(': ');
  const [range, letter] = policy.split(' ');
  const [min, max] = range.split('-').map(Number);
  return {
    password,
    letter,
    min,
    max,
  };
};

export const isValid = (line: string) => {
  const { password, letter, min, max } = parseLine(line);
  const matches = [...password].filter((e) => e === letter).length;
  return matches >= min && matches <= max;
};

export const day2 = (input: string[]) => {
  return input.filter((e) => isValid(e)).length;
};
