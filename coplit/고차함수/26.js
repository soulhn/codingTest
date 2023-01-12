//문제
//객체를 요소로 갖는 배열과 문자열을 입력받아 각 요소의 'animal' 속성값이 문자열과 일치할 경우, 해당 요소의 'score' 속성값을 모두 더한 값을 리턴해야 합니다.

//처음 푼 코드
function calculateScore(records, value) {
  const animalArr = records.filter((a) => a["animal"] === value).map((a) => a["score"]);
  if (animalArr.length === 0) return 0;
  return animalArr.reduce((acc, cur) => acc + cur);
}

//레퍼런스 보고 수정한 코드
function calculateScore(records, value) {
  return records.reduce((acc, cur) => {
    return cur.animal === value ? acc + cur.score : acc;
  }, 0);
}

//래퍼런스 코드
function calculateScore(records, value) {
  const sum = records.reduce(function (acc, cur) {
    if (cur.animal === value) {
      return acc + cur.score;
    } else {
      return acc;
    }
  }, 0);

  return sum;
}

//리팩토링
function calculateScore(records, value) {
  //객체의 animal 속성이 value랑 같으면 score 값 모두 더해!
  return records.reduce((acc, cur) => (cur.animal === value ? acc + cur.score : acc), 0);
}
