export const countAnswers = (group: string) => {
  const set = new Set(group);
  return set.size;
};

export const day6 = (input: string[]) => {
  return input.reduce((a, b) => a + countAnswers(b), 0);
};
