function solution(array, n) {
  const newArray = array.map((a) => Math.abs(n - a));
  const smallValue = Math.min(...newArray);
  return array.sort((a, b) => a - b).find((a) => Math.abs(n - a) === smallValue);
}
