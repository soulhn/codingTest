// 문자열을 입력받아 문자열을 구성하는 각 문자(letter)를 키로 갖는 객체를 리턴해야 합니다.
// 각 키의 값은 해당 문자가 문자열에서 등장하는 횟수를 의미하는 number 타입의 값이어야 합니다.

//처음으로 푼 코드
function countAllCharacters(str) {
  let answer = {};
  for (let letter of str) {
    if (letter in answer) {
      answer[letter] += 1;
    } else {
      answer[letter] = 1;
    }
  }
  return answer;
}

//정답 코드
function countAllCharacters(str) {
  let obj = {}; //빈 객체 선언
  for (let i = 0; i < str.length; i++) {
    //문자 크기 만큼 반복
    if (obj[str[i]] === undefined) {
      //속성 값이 없다면?
      obj[str[i]] = 0; //0으로 초기화
    }
    obj[str[i]]++; //1추가
  }
  return obj;
}
