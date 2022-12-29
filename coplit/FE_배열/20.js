function removeFromBackOfNew(arr) {
  //  arr.pop()
  //  arr.filter(a => a!== arr[arr.length-1])
  //  arr.slice(0, arr.length - 1);
  return arr.filter((a) => a !== arr[arr.length - 1]);
}
