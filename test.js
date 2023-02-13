// const arr = [-1, -2, 5, 7];
const arr = [3, 4, 5];

const largestProductOfThree = function (arr) {
  //길이가 3일 때
  if (arr.length === 3) return arr.reduce((acc, cur) => acc * cur);
  //정렬
  arr.sort((a, b) => a - b);
  //가장 작은 두수가 음수라면
  if (arr[0] < 0 && arr[1] < 0) {
    return arr[0] * arr[1] * arr[arr.length - 1] > arr[arr.length - 1] * arr[arr.length - 2] * arr[arr.length - 3] ? arr[0] * arr[1] * arr[arr.length - 1] : arr[arr.length - 1] * arr[arr.length - 2] * arr[arr.length - 3];
  } else {
    return arr[arr.length - 1] * arr[arr.length - 2] * arr[arr.length - 3];
  }
};

console.log(largestProductOfThree(arr));
