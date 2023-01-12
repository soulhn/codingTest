//처음으로 푼 코드

function computeAverageOfNumbers(arr) {
  if (arr.length === 0) return 0;
  return arr.reduce((acc, cur) => acc + cur) / arr.length;
}
