function computeWhenDouble(interestRate) {
  let count = 0;
  let first = 1;
  // console.log(first + interestRate / 100);
  while (first < 2) {
    count++;
    console.log(first);
    first = first * (1 + interestRate / 100);
  }
  return count;
}
