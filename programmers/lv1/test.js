// function solution(n) {
//   var answer = [];
//   console.log("a : " + n.toString());
//   console.log("b : " + n.toString().split(""));
//   console.log("c : " + n.toString().split("").reverse());
//   console.log(
//     "d : " +
//       n
//         .toString()
//         .split("")
//         .reverse()
//         .map((xxx) => parseInt(xxx))
//   );

//   return answer;
// }
// solution(n);

let n = 12345;

function solution(n) {
  var answer = [];
  answer = n
    .toString()
    .split("")
    .reverse()
    .map((i) => parseInt(i));
  return answer;
}
