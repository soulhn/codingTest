let n = 6;

function solution(n) {
  for (let count = 0; count < 10; count++) {
    if (n === 1) return count;
    n % 2 === 0 ? (n /= 2) : (n = n * 3 + 1);
    console.log(n);
    console.log(`${n} and ${count}`);
  }
  return -1;
}
solution(n);
