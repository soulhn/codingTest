function solution(n) {
  let answer = 0;
  for (const i of String(n)) {
    answer += parseInt(i, 10);
  }
  return answer;
}
