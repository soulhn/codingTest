function solution(n) {
  let answer = [];
  while (n !== 0) {
    a = n % 3;
    answer.push(a);
    n = parseInt(n / 3);
  }

  return answer.map((a, i) => a * 3 ** (answer.length - (i + 1))).reduce((acc, cur) => acc + cur);
}
