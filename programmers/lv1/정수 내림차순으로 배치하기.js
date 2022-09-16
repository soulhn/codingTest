function solution(n) {
  let answer = "";

  n = n
    .toString()
    .split("")
    .sort(function (a, b) {
      return b - a;
    });

  for (let i = 0; i < n.length; i++) {
    answer += n[i];
  }
  return parseInt(answer, 10);
}
