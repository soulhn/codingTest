function makePermutations(str) {
  let answer = "";
  let pushStr = "";
  for (let i = 0; i < str.length; i++) {
    pushStr = "";
    pushStr += str[i];
    for (let j = 0; j < str.length; j++) {
      answer.length === 0 ? (answer = answer + pushStr + str[j]) : (answer = answer + `,${pushStr + str[j]}`);
    }
  }
  return answer;
}
