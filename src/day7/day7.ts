export const day7 = (input: string[], desiredBagColor: string) => {
  let currentBagColours = [desiredBagColor];
  const bags = input.map((e) => e.split('contain')[0]);
  const rules = input.map((e) => e.split('contain')[1]);
  let set = new Set();
  while (currentBagColours.length > 0) {
    let newBagColours: string[] = [];
    for (let i = 0; i < bags.length; i++) {
      const bag = bags[i];
      const rule = rules[i];
      if (currentBagColours.some((e) => rule.includes(e))) {
        const words = bag.split(' ');
        set.add(`${words[0]} ${words[1]}`);
        if (!newBagColours.includes(`${words[0]} ${words[1]}`)) {
          newBagColours.push(`${words[0]} ${words[1]}`);
        }
      }
    }
    currentBagColours = newBagColours;
  }
  return set.size;
};
