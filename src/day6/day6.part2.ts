export const countCommonAnswers = (group: string) => {
  const allAnswers = Array.from(new Set(group.replace(/[\n]/g, '')));
  const answers = group.split('\n');
  const commonAnswers = answers.reduce((a, b) => {
    return [...a].filter((e) => b.includes(e));
  }, allAnswers);
  return commonAnswers.length;
};

export const day6part2 = (input: string[]) => {
  return input.reduce((a, b) => a + countCommonAnswers(b), 0);
};
