function solution(s) {
  let answer = true;
  const pCount = s.toUpperCase().split("P").length - 1;
  const yCount = s.toUpperCase().split("Y").length - 1;

  answer = pCount === yCount;

  return answer;
}
