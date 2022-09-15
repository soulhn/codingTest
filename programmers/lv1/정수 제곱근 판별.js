function solution(n) {
  var answer = 0;
  const sqrtNumber = Math.sqrt(n);
  if (sqrtNumber * sqrtNumber === n) {
    answer += sqrtNumber + 1;
  } else {
    answer = -1;
  }
  return answer;
}
