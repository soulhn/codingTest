function solution(numbers) {
  let sum = 0;
  for (let i = 1; i <= 9; i++) {
    numbers.includes(i) ? null : (sum += i);
  }
  return sum;
}
