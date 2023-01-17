function removeExtremes(arr) {
  const copyArr = arr;
  let short = 0;
  let long = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[short].length >= arr[i].length) {
      short = i;
    }
    if (arr[long].length <= arr[i].length) {
      long = i;
    }
  }
  copyArr.splice(long, 1, false);
  copyArr.splice(short, 1, false);

  return copyArr.filter((el) => el !== false);
}
