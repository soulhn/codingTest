let str = "Hello6 ";
function numberSearch(str) {
  if (str === "") return 0;
  // TODO: 여기에 코드를 작성합니다.
  const numArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let strLength = 0;
  let result = 0;
  for (let letter of str) {
    if (numArr.includes(letter)) {
      result += parseInt(letter, 10);
    } else if (" " !== letter) {
      strLength++;
    }
  }
  console.log(result);
  console.log(strLength);
  return Math.ceil(result / strLength);
}

console.log(numberSearch(str));
