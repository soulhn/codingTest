function isIsogram(str) {
  if (str === "") return true;
  const upperStr = str.toUpperCase();
  const { size } = new Set(upperStr);
  return size === str.length;
}

//래퍼런스 코드
function isIsogram(str) {
  if (str.length === 0) {
    return true;
  }

  let cache = {}; //빈객체
  let strLowered = str.toLowerCase(); //대소문자 구별을 하지 않아 모두 소문자로

  for (let i = 0; i < strLowered.length; i++) {
    if (cache[strLowered[i]]) {
      //cache의 키 값이 있다면
      return false; //있으면 false
    }
    cache[strLowered[i]] = true; //처음 등장한 소문자는 cache에 키값으로 true 저장
  }
  return true; // 중복 값 체크 조건문에 걸리지 않고 for문 종료시 true 반환
}
