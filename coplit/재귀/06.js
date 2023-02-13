function arrProduct(arr) {
  // TODO: 여기에 코드를 작성합니다.
  if (arr.length === 0) return 1;
  const head = arr[0]; //첫번째요소
  const tail = arr.slice(1); //첫번째를 뺀 배열
  // const [head, ...tail] = arr;
  return head * arrProduct(tail);
}
