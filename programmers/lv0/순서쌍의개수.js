function solution(n) {
  let count = 0;
  nSqrt = Math.sqrt(n);
  if (n % Math.sqrt(n) === 0) count += 1;

  for (let i = 1; i < nSqrt; i++) {
    if (n % i === 0) {
      count += 2;
    }
  }
  return count;
}
