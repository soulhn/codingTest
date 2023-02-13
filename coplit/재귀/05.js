function arrSum(arr) {
  // TODO: 여기에 코드를 작성합니다.
  if (arr.length === 0) return 0;
  const head = arr[0]; //첫번째 요소
  const tail = arr.slice(1); //1~끝까지
  return head + arrSum(tail);
}
