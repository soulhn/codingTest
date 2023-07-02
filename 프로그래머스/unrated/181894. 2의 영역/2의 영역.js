function solution(arr) {
  let startIndex = -1;
  let endIndex = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 2) {
      startIndex = i;
      break;
    }
  }

  if (startIndex === -1) {
    return [-1];
  }

  for (let i = arr.length - 1; i >= startIndex; i--) {
    if (arr[i] === 2) {
      endIndex = i;
      break;
    }
  }

  return arr.slice(startIndex, endIndex + 1);
}
