/*
 * utils/math.js
 *
 * Some math-related util functions.
 */

export const truncate = (num, precision) => {
  const power = 10 ** precision;
  return Math.floor(num * power) / power;
};

export const cross = (vec1, vec2) => (
  [
    (vec1[1] * vec2[2]) - (vec1[2] * vec2[1]),
    (vec1[2] * vec2[0]) - (vec1[0] * vec2[2]),
    (vec1[0] * vec2[1]) - (vec1[1] * vec2[0]),
  ]
);

export const tangentVectors = ([a, b, c]) => {
  if (a === 0 && b === 0) {
    return [[1, 0, 0], [0, 1, 0]];
  }
  return [[b, -a, 0], cross([b, -a, 0], [a, b, c])];
};