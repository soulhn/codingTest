//0인덱스랑 123중복인지 확인
//1인덱스랑 23중복인지 확인

function hasRepeatedCharacter(str) {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) return true;
    }
  }
  return false;
}
