//래퍼런스보고 줄인 코드
function getLongestElement(arr) {
  return arr.reduce((a, b) => {
    return a.length >= b.length ? a : b;
  }, "");
}

//첫번째로 푼 코드
function getLongestElement(arr) {
  //가장 긴 문자열 찾고 변수에 저장
  let answer = "";
  arr.forEach((a) => {
    if (a.length > answer.length) {
      answer = a;
    }
  });
  return answer;
}

//래퍼런스 코드 reduce로 푼거 좀 멋있다.
function getLongestElement(arr) {
  return arr.reduce(function (a, b) {
    //a가 누적값
    //b가 순회하는 현재값
    if (a.length >= b.length) {
      return a;
    } else {
      return b;
    }
  }, "");
}
