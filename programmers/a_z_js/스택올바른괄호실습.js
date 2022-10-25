let answer = [];
function solution(s) {
  for (const a of s) {
    if (answer.length === 0 && a === ")") return false;
    if (a === "(") answer.push(a);
    else if (a === ")") answer.pop();
  }
  return answer.length === 0 ? true : false;
}
