let a = [1, 2, 3, 4];
let b = [-3, -1, 0, 2];
function solution(a, b) {
  let c = a.map((item, i) => item * b[i]);
  c.reduce((acc, curr) => acc + curr);
  console.log(c);
}
solution(a, b);
