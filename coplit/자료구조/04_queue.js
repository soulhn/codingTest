function paveBox(boxes) {
  // TODO: 여기에 코드를 작성합니다.
  let answer = [];

  while (boxes.length > 0) {
    //findIndex() : 주어진 판별 함수를 만전하는 배열의 첫 번째 요소에 대한 인덱스 반환, 없다면 -1 반환
    let finishIndex = boxes.findIndex((el) => boxes[0] < el);

    if (finishIndex === -1) {
      answer.push(boxes.length);
      boxes.splice(0, boxes.length);
      // 6. 만약, 첫번째 손님의 박스보다 많은 박스를 포장 중인 손님이 있다면,
      // 6.1. 그 앞 손님까지 첫번째 손님과 퇴장하게 되므로,
      //	    배열 answer에 퇴장한 인원수록 요소로 추가한다.
      // 6.2. 첫번째 손님부터 n번째 손님까지 퇴장 했으므로,
      //	    그만큼 배열에서 뺀다.
    } else {
      answer.push(finishIndex);
      boxes.splice(0, finishIndex);
    }
  }
  return Math.max(...answer);
}
