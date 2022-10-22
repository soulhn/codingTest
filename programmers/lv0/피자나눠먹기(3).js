function solution(slice, n) {
  let result = 1;
  while (!(slice * result >= n)) {
    result++;
  }
  return result;
}

// function solution(slice, n) {
//     return Math.ceil(n / slice)
// }
