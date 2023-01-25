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

  return stackArr.length === 0 ? 1: 0;
}