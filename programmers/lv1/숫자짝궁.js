function solution(X, Y) {
  let answer = [];
  const setX = new Set(X);
  const setY = new Set(Y);
  const intersection = [...setX].filter((item) => setY.has(item));
  for (const i of intersection) {
    let minNum = Math.min([...X].filter((a) => a === i).length, [...Y].filter((a) => a === i).length);
    for (let j = 0; j < minNum; j++) {
      answer.push(i);
    }
  }
  if (answer.length === 0) return "-1";

  answer = answer.map((item) => parseInt(item, 10)).sort((a, b) => b - a);

  return answer.every((item) => item === 0) ? "0" : answer.join("");
}
