export const parseLine = (line: string) => {
  const groups = /([\d]+)-([\d]+) ([a-z]): ([a-z]+)/g.exec(line)!;
  return {
    min: +groups[1],
    max: +groups[2],
    letter: groups[3],
    password: groups[4],
  };
};

export const isValid = (line: string) => {
  const { password, letter, min, max } = parseLine(line);
  const matches = (password.match(new RegExp(letter, 'g')) ?? []).length;
  return min <= matches && matches <= max;
};

export const day2 = (input: string[]) => {
  return input.filter((e) => isValid(e)).length;
};
