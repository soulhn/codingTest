let p1 = [1, 2, 3, 4, 5]; //5
let p2 = [2, 1, 2, 3, 2, 4, 2, 5]; //8
let p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]; //10

function solution(answers) {
  let count = [0, 0, 0];
  let answer = [];
  for (let i = 0; i < answers.length; i++) {
    if (p1[i % p1.length] === answers[i]) count[0] += 1;
    if (p2[i % p2.length] === answers[i]) count[1] += 1;
    if (p3[i % p3.length] === answers[i]) count[2] += 1;
  }
  const maxScore = Math.max(...count);
  for (let i = 0; i < 3; i++) {
    if (count[i] === maxScore) answer.push(i + 1);
  }
  return answer;
}
