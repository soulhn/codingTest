//reduce와 친해지기
function joinArrayOfArrays(arr) {
  return arr.reduce((acc, cur) => acc.concat(cur), []);
}

//래퍼런스 코드 보고 수정한 코드
function joinArrayOfArrays(arr) {
  return arr.reduce((acc, cur) => {
    return acc.concat(cur);
  });
}

//처음으로 푼 코드
function joinArrayOfArrays(arr) {
  let answer = [];
  arr.forEach((a) => {
    return (answer = answer.concat(a));
  });
  return answer;
}

//래퍼런스 코드
function joinArrayOfArrays(arr) {
  const joinedArr = arr.reduce(function (acc, val) {
    return acc.concat(val);
  });
  return joinedArr;
}
