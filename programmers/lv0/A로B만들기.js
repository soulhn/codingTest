function solution(before, after) {
  return before.split("").sort().join("") === after.split("").sort().join("") ? 1 : 0;
}
//노가다하다가 떠오른 방법
