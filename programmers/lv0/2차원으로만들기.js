function solution(box, n) {
  let answer = 1;
  for (const i of box) {
    answer *= Math.floor(i / n);
  }
  return answer;
}

// function solution(box, n) {
//   let [width, length, height] = box;

//   return Math.floor(width / n) * Math.floor(length / n) * Math.floor(height / n);

// }
