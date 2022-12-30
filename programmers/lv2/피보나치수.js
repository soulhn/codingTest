function solution(n) {
  const answer = [];
  for (let i = 0; i <= n; i++) {
    if (i === 0 || i === 1) {
      answer.push(i);
    } else {
      answer.push((answer[(answer.length - 1) % 1234567] + answer[(answer.length - 2) % 1234567]) % 1234567);
    }
  }
  return answer[n] % 1234567;
}
