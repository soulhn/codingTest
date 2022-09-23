function solution(s) {
  return s.length % 2 === 0 ? s[Math.floor(s.length / 2) - 1] + s[Math.floor(s.length / 2)] : s[Math.floor(s.length / 2)];
}

function solution(s) {
  //substring 문서 읽고 추가
  return s.substring(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? s.length / 2 + 1 : Math.ceil(s.length / 2));
}
