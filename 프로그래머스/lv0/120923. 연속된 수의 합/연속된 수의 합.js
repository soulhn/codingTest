function solution(num, total) {
  let answer = [];

  // 연속된 수의 시작값을 찾습니다.
  const start = (2 * total - num * (num - 1)) / (2 * num);       

  // 시작값부터 연속된 수를 찾습니다.
  for (let i = 0; i < num; i++) {
    answer.push(start + i);
  }

  return answer;
}