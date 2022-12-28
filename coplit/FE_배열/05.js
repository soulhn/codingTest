function computeSumOfAllElements(arr) {
  return arr.length === 0 ? 0 : arr.reduce((acc, cur) => acc + cur);
}
