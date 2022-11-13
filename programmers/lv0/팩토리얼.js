function solution(n) {
  let answer = 1;
  function factorial(input) {
    let result = 1;
    for (let i = input; i > 1; i--) {
      result *= i;
    }
    return result;
  }
  while (true) {
    if (factorial(answer) > n) return answer - 1;
    answer++;
  }
  return answer;
}
