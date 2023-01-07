let before = "olleh";
let after = "hello";

//before의 글자 하나씩 돌면서
//after에서 하나씩 지우기
function solution(before, after) {
  return before.split("").sort().join("") === after.split("").sort().join("") ? 1 : 0;
}

console.log(solution(before, after));
