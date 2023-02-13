function reverseArr(arr) {
  //빈 배열
  if (arr.length === 0) return [];
  return [...reverseArr(arr.slice(1)), arr[0]];
}

//레퍼런스 코드
function reverseArr(arr) {
  if (arr.length === 0) return [];
  const head = arr[0];
  const tail = arr.slice(1);
  return reverseArr(tail).concat(head);
}
