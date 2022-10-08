function solution(N, stages) {
  const answer = [];
  for (let stage = 1; stage <= N; stage++) {
    let challenger = stages.filter((item) => stage <= item);
    let loser = stages.filter((item) => stage === item);
    let failRate = loser.length / challenger.length;
    answer.push([stage, failRate]);
  }
  answer.sort((a, b) => b[1] - a[1]);
  return answer.map((item) => item[0]);
}
