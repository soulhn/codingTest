function solution(n) {
  for (let count = 0; count < 500; count++) {
    if (n === 1) return count;
    n % 2 === 0 ? (n /= 2) : (n = n * 3 + 1);
  }
  return -1;
}
