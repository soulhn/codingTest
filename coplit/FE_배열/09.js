// 09번
function getLongestWord(str) {
  //문자열 슬라이스해서 길이 구하기
  //가장 큰 값의 인덱스 찾기
  //배열에서 문자열[인덱스] 리턴하기
  const splitArr = str.split(" ");

  let maxLength = "";

  for (let i = 0; i < splitArr.length; i++) {
    if (maxLength.length < splitArr[i].length) {
      maxLength = splitArr[i];
    }
  }
  return maxLength;
}
