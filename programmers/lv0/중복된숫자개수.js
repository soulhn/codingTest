function solution(array, n) {
  let firstLength = array.length;
  return firstLength - array.filter((a) => a !== n).length;
}
