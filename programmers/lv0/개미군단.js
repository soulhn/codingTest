function solution(hp) {
  const ant5 = 5;
  const ant3 = 3;
  const ant1 = 1;
  let answer = 0;
  answer += Math.floor(hp / ant5);

  answer += Math.floor((hp % ant5) / ant3);

  answer += Math.floor(((hp % ant5) % ant3) / ant1);

  return answer;
}
