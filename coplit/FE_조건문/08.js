function findShortestOfThreeWords(word1, word2, word3) {
  // 3개 각 각의 길이를 구한다.
  // 가장 짧은 길이를 구한다.
  // 가장 짧은 길이가 여러개라면 가장 처음 글자를 리턴한다.
  let answer = word1;
  let arr = [word2, word3];

  for (let i = 0; i < 2; i++) {
    if (answer.length > arr[i].length) answer = arr[i];
  }
  return answer;
}
