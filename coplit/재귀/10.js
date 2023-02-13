function and(arr) {
  if (arr[0] === false) return false;
  if (arr.length === 0) return true;
  return and(arr.slice(1));
}

//래퍼런스코드
function and(arr) {
  if (arr.length === 0) return true;

  const head = arr[0];
  const tail = arr.slice(1);

  // if (head === false) {
  //   return false;
  // }

  return head && and(tail);
}
