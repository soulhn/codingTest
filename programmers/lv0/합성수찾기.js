function solution(n) {
  let count = 0;
  //1~n까지
  for (let i = 1; i <= n; i++) {
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        count += 1;
        break;
      }
    }
  }
  return count;
}
