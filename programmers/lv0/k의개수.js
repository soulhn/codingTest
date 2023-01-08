//의사 코드 아이디어
//i ~j 까지 배열에 넣는다.
//문자열로 만들고
//문자열을 문자열 k로 자르고 갯수를 얻는다.

function solution(i, j, k) {
  let arr = [];
  for (let a = i; a <= j; a++) {
    arr.push(a);
  }
  return arr.join("").split("" + k).length - 1;
}
