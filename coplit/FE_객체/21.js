// 문자열을 입력받아 가장 많이 반복되는 문자(letter)를 리턴해야 합니다.

//12.31일 복습 겸 다시 푼 코드
//가장 많이 반복되는 문자 리턴
//띄어쓰기 X
//가장 많이 반복되는 문자가 다수라면? 가장 먼저 횟수에 도달한 문자 리턴
//빈 문자열 들어오면 빈 문자열 리턴?
function mostFrequentCharacter(str) {
  let obj = {};
  let maxNum = 0;
  let maxStr = "";
  for (let letter of str) {
    if (letter === " ") {
      continue;
    }
    if (!(letter in obj)) {
      obj[letter] = 0;
    }
    obj[letter]++;
    if (maxNum < obj[letter]) {
      maxNum = obj[letter];
      maxStr = letter;
    }
  }
  return maxStr;
}

//리팩토링 코드(해답 코드)
function mostFrequentCharacter(str) {
  let obj = { mostCount: 0, mostFrequent: "" }; //카운트와 빈문자열 선언
  for (let i = 0; i < str.length; i++) {
    //문자열 길이만큼 반복
    if (str[i] === " ") {
      continue; //공백 순환
    }

    if (obj[str[i]] === undefined) {
      //새로운 객체에 글자가 없다면?
      obj[str[i]] = 0; // 글자 속성에 0 입력
    }
    obj[str[i]] += 1; //글자 속성에 1 추가

    if (obj[str[i]] > obj["mostCount"]) {
      //최대 카운트 기본값 0 보다, 글자 속성의 카운트가 크다면
      obj["mostCount"] = obj[str[i]]; //최대 카운트 = 글자 속성의 값
      obj["mostFrequent"] = str[i]; //최빈값을 글자로 설정
    }
  }
  return obj["mostFrequent"]; //글자값 리턴
}

//처음으로 푼 코드
function mostFrequentCharacter(str) {
  let obj = { mostCount: 0, mostFrequent: "" };
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      continue;
    }

    if (obj[str[i]] === undefined) {
      obj[str[i]] = 0;
    }
    obj[str[i]] += 1;

    if (obj[str[i]] > obj["mostCount"]) {
      obj["mostCount"] = obj[str[i]];
      obj["mostFrequent"] = str[i];
    }
  }
  return obj["mostFrequent"];
}
