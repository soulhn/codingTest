function power(base, exponent) {
  //exponent 값이 0인지 확인.
  if (exponent === 0) return 1;

  // 지수를 2로 나눈다
  const half = parseInt(exponent / 2);
  // 재귀적으로 호출
  const temp = power(base, half);

  const result = (temp * temp) % 94906249;

  if (exponent % 2 === 1) return (base * result) % 94906249;
  else return result;
}

//분할 정복 알고리즘
console.log(power(2, 4));
