function solution(numbers, k) {
  let target = k * 2 - 2;
  if (target < numbers.length) {
    return numbers[target];
  } else {
    target = target % numbers.length;
    return numbers[target];
  }
}
