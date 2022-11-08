function solution(dot) {
  if (dot[0] > 0) {
    return dot[1] > 0 ? 1 : 4;
  }
  if (dot[0] < 0) {
    return dot[1] > 0 ? 2 : 3;
  }
}

function solution2(dot) {
  const [num, num2] = dot;
  const check = num * num2 > 0;
  return num > 0 ? (check ? 1 : 4) : check ? 3 : 2;
}
