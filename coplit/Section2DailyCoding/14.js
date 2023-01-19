function superIncreasing(arr) {
  let answer = true;
  arr.reduce((acc, cur, idx, array) => {
    if (acc >= array[idx]) {
      answer = false;
    }
    return acc + cur;
  });
  return answer;
}
