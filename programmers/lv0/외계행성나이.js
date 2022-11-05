function solution(age) {
  age = age + "";
  answer = "";
  for (let i = 0; i < age.length; i++) {
    answer += String.fromCharCode(parseInt(age[i], 10) + 97);
  }
  return answer;
}
