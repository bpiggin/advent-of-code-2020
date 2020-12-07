const countContainerBags = (input: string[], desiredBagColor: string) => {
  const containerBags = new Set();
  const bags = input.map((e) => e.split(' contain ')[0]);
  const innerBagsOfBags = input.map((e) => e.split(' contain ')[1]);
  let currentBagColours = [desiredBagColor];
  while (currentBagColours.length > 0) {
    const newBagColours = new Set();
    for (let i = 0; i < bags.length; i++) {
      if (currentBagColours.some((e) => innerBagsOfBags[i].includes(e))) {
        const words = bags[i].split(' ');
        const bagColour = `${words[0]} ${words[1]}`;
        containerBags.add(bagColour);
        newBagColours.add(bagColour);
      }
    }
    currentBagColours = Array.from(newBagColours) as string[];
  }
  return containerBags.size;
};

export const day7 = (input: string[]) => {
  return countContainerBags(input, 'shiny gold');
};
