function solution(sides) {
  const minNum = Math.min(...sides);
  const maxNum1 = Math.max(...sides);
  const maxNum2 = minNum + maxNum1 - 1;
  return maxNum2 - (maxNum1 - minNum);
}
