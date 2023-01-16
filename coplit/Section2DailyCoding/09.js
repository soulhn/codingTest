function ABCheck(str) {
  str = str.toUpperCase();
  let answer = false;
  for (let i = 0; i < str.length - 5; i++) {
    if (str[i] === "A" && str[i + 4] === "B") {
      answer = true;
      break;
    }
    if (str[i] === "B" && str[i + 4] === "A") {
      answer = true;
      break;
    }
  }
  return answer;
}

//리팩토링 코드
function ABCheck(str) {
  str = str.toUpperCase();
  let answer = false;
  for (let i = 0; i < str.length - 5; i++) {
    if ((str[i] === "A" && str[i + 4] === "B") || (str[i] === "B" && str[i + 4] === "A")) {
      answer = true;
      break;
    }
  }
  return answer;
}
