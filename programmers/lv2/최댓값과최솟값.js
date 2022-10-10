let answer = [];
function solution(s) {
  let a;
  a = s.split(" ").map((item) => parseInt(item, 10));
  answer.push(Math.min(...a));
  answer.push(Math.max(...a));
  return answer.join(" ");
}
