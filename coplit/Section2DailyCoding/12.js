//처음으로 푼 코드
function findBugInApples(arr) {
  let row = 0;
  let column = 0;
  const strArr = arr.map((el) => el.join(""));
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].includes("B")) {
      row = i;
      break;
    }
  }
  column = strArr[row].indexOf("B");
  return [row, column];
}

//래퍼런스 코드
//전체 순회 사용
function findBugInApples(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr[i].length; j += 1) {
      if (arr[i][j] === "B") {
        return [i, j];
      }
    }
  }
}
