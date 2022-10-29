function solution(my_string, n) {
  let answer = "";
  for (const i of my_string) {
    answer += i.repeat(n);
  }
  return answer;
}
