const getInnerBags = (input: string[], colour: string) => {
  const bags = input.map((e) => e.split(' contain ')[0]);
  const innerBagsOfBags = input.map((e) => e.split(' contain ')[1]);
  const bag = bags.find((e) => e.includes(colour))!;
  const bagIndex = bags.indexOf(bag);
  return innerBagsOfBags[bagIndex].split(', ');
};

const countInnerBags = (
  input: string[],
  colour: string,
  multiplier: number = 1,
) => {
  let count = 0;
  const innerBags = getInnerBags(input, colour);
  if (innerBags[0] !== 'no other bags.') {
    for (let i = 0; i < innerBags.length; i++) {
      const [quantity, colour1, colour2] = innerBags[i].split(' ');
      const innerBagCount = +quantity * multiplier;
      count += innerBagCount;
      count += countInnerBags(input, `${colour1} ${colour2}`, innerBagCount);
    }
  } else {
    return 0;
  }
  return count;
};

export const day7part2 = (input: string[]) => {
  return countInnerBags(input, 'shiny gold');
};
