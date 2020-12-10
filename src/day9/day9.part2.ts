export const findContiguousList = (arr: number[], val: number) => {
  let answer = 0;
  for (let i = 0; i < arr.length; i++) {
    let list = [arr[i]];
    for (let j = i + 1; j < arr.length; j++) {
      list = list.concat(arr[j]);
      if (list.reduce((a, b) => a + b, 0) === val) {
        answer = Math.min(...list) + Math.max(...list);
        break;
      }
      if (list.reduce((a, b) => a + b, 0) > val) {
        break;
      }
    }
    if (answer > 0) {
      break;
    }
  }
  return answer;
};

export const day9part2 = (input: number[]) => {
  return findContiguousList(input, 393911906);
};
