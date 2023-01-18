let arr = [
  ["A", "A", "A", "A", "A"],
  ["A", "B", "A", "A", "A"],
  ["A", "A", "A", "A", "A"],
  ["A", "A", "A", "A", "A"],
  ["A", "A", "A", "A", "A"],
];
//요소를 순회하면서 문자열로 변환
//문자열에
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

console.log(findBugInApples(arr));
