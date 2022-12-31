function printObject(obj) {
  let answer = "";
  for (let key in obj) {
    answer += `${key}: ${obj[key]}\n`;
  }
  return answer;
}
