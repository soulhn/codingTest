let answer = [];
function solution(s) {
  for (const a of s) {
    if (answer.length === 0 && a === ")") return false;
    if (a === "(") answer.push(a);
    else if (a === ")") answer.pop();
  }
  return answer.length === 0 ? true : false;
}

//강사님 코드
function solution2(s) {
  const stack = [];

  for (const c of s) {
    if (c === "(") {
      stack.push(c);
    } else {
      if (stack.length === 0) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.length === 0;
}

// 강사님 스택의 개념을 이용하지만 배열 사용 X
function solution3(s) {
  let count = 0;

  for (const c of s) {
    if (c === "(") {
      count += 1;
    } else {
      if (stack.length === 0) {
        return false;
      }
      count -= 1;
    }
  }
  return count === 0;
}
