function solution(s) {
  let answer = [];
  //스택형식으로 풀이
  for (const i of s) {
    if (i === "(") {
      //처음 시작 시 (로 시작한다면 배열에 추가
      answer.push(i);
    } else if (i === ")") {
      // )라면 배열의 길이를 체크한다. 빈배열에 )먼저 등장한다면 false
      if (answer.length) {
        // 배열 내부에 값이 존재한다면 ( 삭제
        answer.pop();
      } else {
        return false;
      }
    }
  }
  return !answer.length; //배열의 길이가 0이라면 true, 1이상이라면 false
}
