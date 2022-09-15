function solution(n) {
  var answer = [];
  answer = n
    .toString()
    .split("")
    .reverse()
    .map((i) => parseInt(i));
  return answer;
}
