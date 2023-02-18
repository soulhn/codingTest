const bubbleSort = function (arr) {
  //변경되지 않았음을 저장하는 변수
  let isNotchanged = false;
  //반복 중첩 i는 0부터 길이 -1까지
  for (let i = 0; i < arr.length - 1; i++) {
    //반복 실행 시 변경 되지 않았음 : true
    isNotchanged = true;
    //가장 뒤 index는 반복 시 사용하기에 제외
    for (let j = 0; j < arr.length - 1 - i; j++) {
      //앞의 요소가 뒤의 요소 값 보다 다면
      if (arr[j] > arr[j + 1]) {
        //변경 되지 않았음 : 거짓
        isNotchanged = false;
        //앞뒤 요소 변경
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
    //변경 되지 않았다면 정렬이 완료된 배열이기에 배열 리턴
    if (isNotchanged) return arr;
  }
  return arr;
};
