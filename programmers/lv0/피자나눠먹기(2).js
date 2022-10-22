function solution(n) {
  let pizza = 6;
  let count = 1;
  while (pizza % n !== 0) {
    count += 1;
    pizza = 6 * count;
  }
  return count;
}
