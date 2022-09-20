function solution(arr) {
  if (arr.length === 1) {
    return [-1];
  }

  arr = arr.filter(function (item) {
    return item !== Math.min(...arr);
  });
  return arr;
}
