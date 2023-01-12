function pipe(...funcs) {
  return function (num) {
    let answer = num;
    for (const func of funcs) {
      answer = func(answer);
    }
    return answer;
  };
}
