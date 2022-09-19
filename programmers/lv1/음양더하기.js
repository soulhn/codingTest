function solution(absolutes, signs) {
  for (let i = 0; i < signs.length; i++) {
    signs[i] === true ? (absolutes[i] = +absolutes[i]) : (absolutes[i] = -absolutes[i]);
  }
  var answer = absolutes.reduce((acc, curr) => acc + curr);
  return answer;
}
