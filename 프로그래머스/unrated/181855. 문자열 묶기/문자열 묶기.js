function solution(strArr) {
  let counting = new Map();
  const countArray = strArr.map((el) => el.length);
  let max = 0;
  for (let i of countArray) {
    if (!counting.has(i)) counting.set(i, 0);
    if (counting.has(i)) counting.set(i, counting.get(i) + 1);
    while (counting.get(i) > max) max++;
  }
  return max;
}
