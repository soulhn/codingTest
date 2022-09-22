let arr = [5, 9, 7, 10];
let divisor = 5;

function solution(arr, divisor) {
  let answer;
  answer = arr.filter((i) => i % divisor === 0);
  return answer.length === 0
    ? [-1]
    : answer.sort(function (a, b) {
        return a - b;
      });
}

solution(arr, divisor);
//add
//add
