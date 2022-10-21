// const solution = (n) =>
//     Array
//         .from({ length: n }, (_, i) => i + 1)
//         .filter(i => i % 2 !== 0)

function solution(n) {
  let array = [];
  for (let i = 1; i <= n; i++) {
    array.push(i);
  }

  return array.filter((a) => a % 2 !== 0);
}
