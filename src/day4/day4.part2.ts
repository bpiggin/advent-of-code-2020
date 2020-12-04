const required = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];

const isEntryValid = (entry: string) => {
  const [field, value] = entry.split(':');
  if (field === 'byr') {
    return 1920 <= +value && +value <= 2002;
  }
  if (field === 'iyr') {
    return 2010 <= +value && +value <= 2020;
  }
  if (field === 'eyr') {
    return 2020 <= +value && +value <= 2030;
  }
  if (field === 'hgt') {
    const match = value.match(new RegExp(/^[\d]+(cm|in)$/));
    if (!match) {
      return false;
    }
    const unit = value.slice(value.length - 2);
    const number = value.slice(0, value.length - 2);
    if (unit === 'cm') {
      return 150 <= +number && +number <= 193;
    }
    return 59 <= +number && +number <= 76;
  }
  if (field === 'hcl') {
    return !!value.match(new RegExp(/^#[0-9a-f]{6}$/));
  }
  if (field === 'ecl') {
    return ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(value);
  }
  if (field === 'pid') {
    return !!value.match(new RegExp(/^\d{9}$/));
  }
  return true;
};

const isValid = (passport: string) => {
  const entries = passport.split(' ');
  const fields = entries.map((e) => e.split(':')[0]);
  return (
    required.every((e) => fields.includes(e)) &&
    entries.every((e) => isEntryValid(e))
  );
};

export const day4part2 = (input: string[]) => {
  return input.filter((e) => isValid(e)).length;
};
