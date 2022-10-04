function solution(n) {
  let count = 0;
  function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) count += 1;
  }
  return count;
}
