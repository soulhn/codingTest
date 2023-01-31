function solution(score) {
  const SCORE_LEGTH = score.length;
  let answer = Array(SCORE_LEGTH).fill(0); //정답을 넣는 배열

  score = score.map((el) => (el[0] + el[1]) / 2);

  let count = 1;
  let now1th = Math.max(...score); //현재 1등인 값

  for (let i = 0; i < SCORE_LEGTH; i++) {
    // console.log("현재 1등 : " + now1th);
    // console.log(score);
    if (score.indexOf(now1th) !== -1) {
      answer[score.indexOf(now1th)] = count;
      score[score.indexOf(now1th)] = 0;
    } else {
      count = i + 1; // 1등 값이 없으면 등수 올리기

      now1th = Math.max(...score); // 1등값 다시 세팅
      answer[score.indexOf(now1th)] = i + 1;
      score[score.indexOf(now1th)] = 0;
    }
  }

  return answer;
}

