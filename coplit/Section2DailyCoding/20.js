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
