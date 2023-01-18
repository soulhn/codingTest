let arr = ["YCDt", "oao", "unI"];

console.log(arr);
function readVertically(arr) {
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    let str = arr[i];
    for (let j = 0; j < str.length; j++) {
      if (temp.length === j) {
        temp.push(str[j]);
      } else {
        temp[j] = temp[j] + str[j];
      }
    }
    console.log(temp);
  }
  return temp.join("");

  // let result = "";
  // for (let i = 0; i < temp.length; i++) {
  //   result = result + temp[i];
  // }

  // return result;
}

console.log(readVertically(arr));
