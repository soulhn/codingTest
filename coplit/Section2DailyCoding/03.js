//첫번째 풀이 : 비트 연산
//2의 제곱은 비트로 나타낼 때 맨 왼쪽 비트만 1이고, n이 2의 제곱이라면 n-1 은 맨 왼쪽 비트가 0이고 그 오른쪽 비트들은 모두 1이게 됨.
//따라서 n이 2의 거듭제곱이라면 n과 n-1을 and 연산 했을 때 0이 나오게 됨.
function powerOfTwo(num) {
  while (false) {}
  return (num & (num - 1)) === 0;
}

//두번째 풀이
function powerOfTwo(num) {
  if (num === 1) return true;

  let pow2 = 2;

  while (pow2 < num) {
    pow2 *= 2;
  }
  return pow2 === num;
}
