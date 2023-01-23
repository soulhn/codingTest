//문자열 순회
//이전 문자와 현재 문자가 같은지 확인
// => 같다면 카운트 +1
// => 다르면 3이상 일 경우 숫자, 키운트 0으로 초기화, 이전 글자 변경
// => 2이하 일 경우 , 이전 글자를 count 만큼 정답 배열에 추가
// 첫번째 풀이
function compressString(str) {
  let count = 1; //초기 값(맨 앞글자 수)
  let beforeLetter = str[0]; //맨 앞 글자
  let answer = "";
  for (let i = 1; i < str.length; i++) {
    if (beforeLetter === str[i]) {
      count++;
    } //전 글자와 현 글자가 같다면
    else {
      //글자가 다르다면
      if (count > 2) {
        //3이상 일 경우
        answer = answer + count + beforeLetter;
      } else {
        answer = answer + beforeLetter.repeat(count);
      }
      count = 1;
      beforeLetter = str[i];
    }
  }
  if (count > 2) {
    //3이상 일 경우
    answer = answer + count + beforeLetter;
  } else {
    answer = answer + beforeLetter.repeat(count);
  }
  return answer;
}

//래퍼런스 코드
//내 코드와 차이점
//조건문을 한번 더 사용하여 남은 것을 처리했지만
//더미 문자열 하나를 추가하여 처리했다.
function compressString(str) {
  // 연속되는 문자를 기록하기 위한 변수
  // 첫 번째 문자로 초기화
  let before = str[0];

  // 동일한 문자의 반복 횟수
  let count = 1;

  // 정답으로 리턴할 문자열
  let result = "";

  // 마지막 부분이 연속된 문자일 경우를 위해 dummy 문자 추가
  str = str + " ";
  for (let i = 1; i < str.length; i++) {
    // 동일한 문자가 반복될 경우
    if (before === str[i]) {
      count++;
    } else {
      // 이전과 다른 문자일 경우,
      // 반복된 횟수가 3 이상일 경우에만 압축을 한다.
      if (count >= 3) {
        result = result + `${count}${before}`;
      } else {
        result = result + before.repeat(count);
      }
      before = str[i];
      count = 1;
    }
  }

  return result;
}
