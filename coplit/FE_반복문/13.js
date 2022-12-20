//abc
//a ab abc
//총 3번 반복
//1번반복
//2번반복
//3번반복

function makeMarginalString(str) {
  let answer = "";
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j <= i; j++) {
      answer += str[j];
    }
  }
  return answer;
}
