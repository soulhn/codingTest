function sumTo(num) {
  // TODO: 여기에 코드를 작성합니다.
  // 별도의 최적화 기법(memoization)은 금지됩니다.
  if (num === 0) return 0;
  if (num === 1) return 1;
  // 위 두 줄을 한줄로 변경 가능
  // if (num <= 1) return num;
  return num + sumTo(num - 1);
}

console.log(sumTo(10));
