function isPrime(num) {
  // TODO: 여기에 코드를 작성합니다.
  if (num === 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// 소수 : 소쑤(발음) -> 1과 자신으로밖에 나누어지지 않는 고독한 숫자
// 수학에서 1과 그수 자신 이외에는 자연수로 나눌 수 없는, 1보다 큰 자연수
// 1. 소수는 1보다 커야 한다.
// 2. 2를 제외한 짝수는 소수가 아니다 (2는 소수)
// 3. 3부터 자기 자신 '전'까지 나누어 떨어지는 수가 하나라도 있으면, 소수가 아니다.
function isPrime(num) {
  // 제곱근 Math.sqrt()
  let sqrt = Math.sqrt(num);
  // 1이면 소수가 아니다.
  if (num === 1) {
    return false;
  }
  // 짝수는 소수가 아니다 (2를 제외하고)
  if (num === 2) {
    return true;
  }
  if (num % 2 === 0) {
    return false;
  }
  // 3. 3부터 자기 자신 '전'까지 나누어 떨어지는 수가 하나라도 있으면, 소수가 아니다.
  for (let i = 3; i < sqrt; i += 2) {
    // num = 12
    // 1 * 12
    // 2 * 6
    // 3 * 4
    // 12의 제곱근 * 12의 제곱근
    // 4 * 3
    // 6 * 2
    // 12 * 1
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
