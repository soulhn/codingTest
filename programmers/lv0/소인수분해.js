function solution(n) {
  const answer = [];

  while (n % 2 === 0) {
    answer.push(2);
    n /= 2;
  }

  // 3부터 루트n까지 나눌 수 있으면 나누기
  for (let i = 3; i * i <= n; i += 2) {
    while (n % i === 0) {
      answer.push(i);
      n /= i;
    }
  }

  // 루트n부터 n까지 소수인 경우 처리
  if (n > 2) answer.push(n);

  return [...new Set(answer)];
}
