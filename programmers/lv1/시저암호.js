let s = "a B z";
let n = 4;

function solution(s, n) {
  let a = s.split("").map(function (a) {
    if (a.charCodeAt(0) === 32) return 32;
    return a.charCodeAt(0) + n;
  });
  console.log(a);
  a = a.map((item) => String.fromCharCode(item));
  console.log(a);
}
solution(s, n);

Z = 90;
z = 122;
