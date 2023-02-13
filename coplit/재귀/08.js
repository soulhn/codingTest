function drop(num, arr) {
  if (num >= arr.length) return [];
  if (num === 0) return arr;
  const tail = arr.slice(1);
  return drop(num - 1, tail);
}

//2번째로 푼 코드
function drop(num, arr) {
  //num이 더 큰 수라면 []를 리턴하며 종료
  if (num >= arr.length) return [];
  //더 이상 삭제할 num이 없다면 arr 리턴
  if (num === 0) return arr;
  return drop(num - 1, arr.slice(1));
}
