function solution(array, commands) {
  let answer = [];
  commands.map(function (item) {
    return array
      .slice(item[0] - 1, item[1])
      .sort((a, b) => a - b)
      .forEach(function (k, i) {
        if (i === item[2] - 1) return answer.push(k);
      });
  });
  return answer;
}
