function solution(x) {
  var answer = 0;
  x.toString()
    .split("")
    .forEach((item) => (answer += parseInt(item, 10)));
  return x % answer === 0;
}
