let arr = [1, 3, 6, 13, 54];
function superIncreasing(arr) {
  let answer = true;
  arr.reduce((acc, cur, idx, array) => {
    if (acc > array[idx]) {
      console.log("acc : " + acc);
      console.log("array[idx] : " + array[idx]);
      answer = false;
    }
    return acc + cur;
  });
  return answer;
}

console.log(superIncreasing(arr));
