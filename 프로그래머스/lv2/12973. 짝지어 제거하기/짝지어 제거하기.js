function solution(s) {
  //스택을 만들어 제거하기
  let sArr = s.split("");
  let stackArr = [];
  for (let i = 0; i < sArr.length; i++) {
    stackArr.push(sArr[i]);
    if (stackArr[stackArr.length - 1] === stackArr[stackArr.length - 2]) {
      stackArr.pop();
      stackArr.pop();
    }
  }
  return stackArr.length === 0 ? 1 : 0;
}

//다른 사람 풀이
function solution(s) {
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    if (arr[arr.length - 1] !== s[i]) {
      arr.push(s[i]);
    } else {
      arr.pop();
    }
  }
  return arr.length > 0 ? 0 : 1;
}

//다른 사람 풀이2
function solution(s) {
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    arr.push(s[i]);
    if (arr[arr.length - 1] === arr[arr.length - 2]) {
      arr.pop();
      arr.pop();
    }
  }
  return arr.length === 0 ? 1 : 0;
}
