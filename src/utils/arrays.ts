export const indexesOf = <T>(arr: T[], predicate: (e: T) => boolean) => {
  return arr.reduce(
    (a: number[], b, i) => (predicate(b) ? a.concat(i) : a),
    [],
  );
};
