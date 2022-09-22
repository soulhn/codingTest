// function solution(arr, divisor) {
//   let answer;
//   answer = arr.filter((i) => i % divisor === 0);
//   return answer.length === 0
//     ? [-1]
//     : answer.sort(function (a, b) {
//         return a - b;
//       });
// }

function solution(arr, divisor) {
  let answer;
  answer = arr.filter((i) => i % divisor === 0);
  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}
