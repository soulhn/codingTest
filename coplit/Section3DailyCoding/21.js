//내가 푼 코드
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

//래퍼런스 코드
const largestProductOfThree2 = function (arr) {
  //얕은 복사 후 정렬
  const sorted = arr.slice().sort((a, b) => a - b);
  const len = arr.length;
  //가장 큰수 3개의 곱
  const candi1 = sorted[len - 1] * sorted[len - 2] * sorted[len - 3];
  //음수가 존재 할 경우 음수*음수 * 가장 큰수
  const candi2 = sorted[len - 1] * sorted[0] * sorted[1];
  return Math.max(candi1, candi2);
};
