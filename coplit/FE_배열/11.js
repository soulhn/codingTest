//11번
function addToFront(arr, el) {
  arr.unshift(el); //배열의 길이를 리턴
  //배열은 원시값이 아니여서 함수 사용 시 기존 배열이 변형됨
  // 원시값은 함수를 사용하더라도 기본값이 변경되지 않는다
  return arr;
}
