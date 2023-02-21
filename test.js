// const arr = [-1, -2, 5, 7];
//2

const bubbleSort = function (arr) {
  // let isSorted = false;
  for (let i = 0; i < arr.length - 1; i++) {
    // isSorted = true;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // isSorted = false;
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
    // if (isSorted) break;
  }
  return arr;
};

console.log(bubbleSort([20, -10, -11, 2, 4, 299]));
