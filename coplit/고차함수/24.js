//처음으로 푼 코드
function computeProductOfAllElements(arr) {
  if (arr.length == 0) return 1;
  return arr.reduce((acc, cur) => acc * cur);
}
//리팩토링 코드
function computeProductOfAllElements(arr) {
  return arr.reduce((acc, cur) => acc * cur, 1);
}
