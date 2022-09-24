function solution(a, b) {
  let c = a.map((item, i) => item * b[i]);
  return c.reduce((acc, curr) => acc + curr);
}
