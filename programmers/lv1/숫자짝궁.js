let X = "100";
let Y = "203045";
// 미해결..
function solution(X, Y) {
  let answer = [];
  X = X.split("");
  Y = Y.split("");
  for (let i = 0; i < X.length; i++) {
    for (let j = 0; j < Y.length; j++) {
      if (X[i] === Y[j]) {
        answer.push(X[i]);
        Y.split(j, 1);
        break;
      }
    }
  }
  if (answer.length === 0) return "-1";
  // console.log(answer);

  answer = answer.map((item) => parseInt(item, 10)).sort((a, b) => b - a);
  // .join("");
  console.log(answer);

  return answer.every((item) => item === 0) ? "0" : answer.join("");
}
