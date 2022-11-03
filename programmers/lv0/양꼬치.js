function solution(n, k) {
  const sale = k - Math.floor(n / 10);
  return n * 12000 + sale * 2000;
}
