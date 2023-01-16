function insertDash(str) {
  let answer = "";
  let beforeOdd = false;
  for (const letter of str) {
    const numLetter = parseInt(letter, 10);
    if (beforeOdd && numLetter % 2 === 1) {
      answer += `-${letter}`;
    } else {
      numLetter % 2 === 1 ? (beforeOdd = true) : (beforeOdd = false);
      answer += letter;
    }
  }
  return answer;
}
