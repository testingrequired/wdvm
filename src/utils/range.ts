export default (start: number, end: number): number[] => {
  return new Array(end - start + 1).fill(null).map((d, i) => i + start);
};
