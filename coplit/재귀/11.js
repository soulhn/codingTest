function or(arr) {
  if (arr[0] === true) return true;
  if (arr.length === 0) return false;
  return or(arr.slice(1));
}
//레퍼런스 코드
function or(arr) {
  if (arr.length === 0) return false;
  return arr[0] || or(arr.slice(1));
}
