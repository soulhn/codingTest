function solution(dots) {
  let widthArray = dots.map((a) => a[0]);
  let heightArray = dots.map((a) => a[1]);
  let a = Math.max(...widthArray) - Math.min(...widthArray);
  let b = Math.max(...heightArray) - Math.min(...heightArray);
  return a * b;
}
