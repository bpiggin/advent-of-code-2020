const required = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];

const isValid = (passport: string) => {
  const entries = passport.split(' ');
  const fields = entries.map((e) => e.split(':')[0]);
  return required.every((e) => fields.includes(e));
};

export const day4 = (input: string[]) => {
  return input.filter((e) => isValid(e)).length;
};
