//다시 푼 코드
function sumOfArraysInArray(arr) {
  return arr
    .reduce((acc, cur) => acc.concat(cur))
    .filter((el) => typeof el === "number")
    .reduce((acc, cur) => acc + cur, 0);
}

//처음으로 푼 코드
function sumOfArraysInArray(arr) {
  function joinArrayOfArrays(arr) {
    return arr.reduce((acc, cur) => {
      return acc.concat(cur);
    });
  }

  let answer = joinArrayOfArrays(arr);
  return answer.length === 0 ? 0 : answer.filter((a) => typeof a === "number").reduce((acc, cur) => acc + cur, 0);
}
