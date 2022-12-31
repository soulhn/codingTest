function getValueOfNthElement(arr, num) {
  if (arr.length === 0) return "no name";
  if (arr.length <= num) {
    num = arr.length - 1;
  }
  return arr[num].name;
}
