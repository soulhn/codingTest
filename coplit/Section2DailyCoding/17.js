function computeSquareRoot(num) {
  // TODO: 여기에 코드를 작성합니다.
  let x = num / 2;
  let count = 0;

  while (count < 6) {
    x = (x + num / x) / 2;
    count++;
  }
  return x % 1 === 0 ? x : Number(x.toFixed(2));
}
