let arr = ["where", "is", "the", "longest", "word"];
function removeExtremes(arr) {
  const copyArr = arr;
  let short = 0;
  let long = 0;

  for (let i = 1; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[short] >= arr[i]) {
      short = i;
    }
    if (arr[long] <= arr[i]) {
      long = i;
    }
  }
  copyArr.splice(long, 1, false);

  copyArr.splice(short, 1, false);

  return copyArr.filter((el) => el !== false);
}

console.log("결과는 : " + removeExtremes(arr));
