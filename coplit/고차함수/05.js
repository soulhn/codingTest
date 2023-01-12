function compose2(func1, func2) {
  const answer = function (num) {
    return func1(func2(num));
  };
  return answer;
}

function compose2(func1, func2) {
  return function (num) {
    return func1(func2(num));
  };
}
