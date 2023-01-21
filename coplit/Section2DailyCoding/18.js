function numberSearch(str) {
  if (str === "") return 0;
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
  return Math.round(result / strLength);
}
