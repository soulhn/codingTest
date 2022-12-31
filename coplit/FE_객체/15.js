function select(arr, obj) {
  let answer = {};
  //빈 객체
  //arr를 받았다. 키가 들어 있는
  //arr전체를 순회할려고 [a, b,c]
  for (let key of arr) {
    if (obj[key]) {
      //obj에 키값? 1,2,3 obj.key => undefined false
      //obj[a], obj[b]
      answer[key] = obj[key]; //있는 값이라면 > 빈 객체에 그대로 추가
    }
  }
  return answer;
}
